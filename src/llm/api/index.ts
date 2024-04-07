import OpenAI from "openai";
import { URL, MODEL } from "../constants";
import { CallbackOptions, Config } from "./types";
import { v4 as uuidv4 } from "uuid";
import { defaultLLMCallbacks } from "./callbacks";

const api = new OpenAI({
  baseURL: URL,
  apiKey: "",
});

class LLM<TCallback extends string> {
  private config: Config<
    Record<TCallback & keyof typeof defaultLLMCallbacks, CallbackOptions>
  >;

  constructor(
    config: Config<
      Record<TCallback & keyof typeof defaultLLMCallbacks, CallbackOptions>
    >,
  ) {
    this.config = config;
    this.config.callbackOptions = {
      ...defaultLLMCallbacks,
      ...(config.callbackOptions ?? {}),
    };
  }

  createAgent(systemPrompt?: string, options?: { name?: string }) {
    const messages: Array<
      | OpenAI.ChatCompletionUserMessageParam
      | OpenAI.ChatCompletionSystemMessageParam
    > = [{ role: "system", name: options?.name, content: systemPrompt ?? "" }];

    const name = options?.name;
    const model = this.config.model;
    const stream = this.config.stream ?? false;

    async function* generateAsync(
      prompt: string,
      { temporarySystemPrompt }: { temporarySystemPrompt?: string } = {},
    ) {
      if (temporarySystemPrompt) {
        messages.push({ role: "system", content: temporarySystemPrompt });
      }
      messages.push({ role: "user", name, content: prompt });
      const params = { model: MODEL[model], messages } as const;
      if (stream) {
        const result = await api.chat.completions.create({
          ...params,
          stream: true,
        });
        if (temporarySystemPrompt) {
          messages.push({ role: "system", content: systemPrompt ?? "" });
        }
        for await (const chunk of result) {
          yield chunk.choices[0]?.delta?.content || "";
        }
        return "";
      } else {
        const result = await api.chat.completions.create({
          ...params,
          stream: false,
        });
        return result.choices[0] || "";
      }
    }

    const generate = async (
      prompt: string,
      { callbacks, temporarySystemPrompt}: {
        callbacks: (TCallback & keyof typeof defaultLLMCallbacks)[];
        temporarySystemPrompt?: string,
      } = { callbacks: [] },
    ) => {
      const { callbackOptions } = this.config;
      const generationId = `${name}-${model}-${uuidv4()}`;

      let result = "";

      callbacks.forEach((key) => {
        const callback = callbackOptions?.[key];
        callback?.onTokenGenerationStarted?.(generationId);
      });

      for await (const token of generateAsync(prompt, { temporarySystemPrompt })) {
        callbacks.forEach((key) => {
          const callback = callbackOptions?.[key];
          callback?.onTokenGenerated?.(token);
        });
        result += token;
      }

      callbacks.forEach((key) => {
        const callback = callbackOptions?.[key];
        callback?.onTokenGenerationEnded?.(result, generationId);
      });

      return result;
    };

    return { generate };
  }
}

export const createLLM = <
  TCallbackOptions extends Record<string, CallbackOptions>,
>(
    config: Config<TCallbackOptions>,
  ) => new LLM(config);
