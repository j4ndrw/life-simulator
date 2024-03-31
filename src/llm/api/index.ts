import OpenAI from "openai";
import { URL, MODEL } from "../constants";

const api = new OpenAI({
  baseURL: URL,
  apiKey: "",
});

function createAgent(
  systemPrompt: string,
  model: keyof typeof MODEL,
  name?: string,
  options: { stream?: boolean } = { stream: false },
) {
  const messages: Array<
    | OpenAI.ChatCompletionUserMessageParam
    | OpenAI.ChatCompletionSystemMessageParam
  > = [{ role: "system", name, content: systemPrompt }];
  async function* generate(prompt: string) {
    messages.push({ role: "user", name, content: prompt });
    const params = { model: MODEL[model], messages } as const;
    if (options.stream) {
      const result = await api.chat.completions.create({
        ...params,
        stream: true,
      });
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

  return { generate };
}

export const llm = { createAgent };
