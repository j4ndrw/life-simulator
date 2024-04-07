import { MODEL } from "../constants";

export type Config<TCallbackOptions extends Record<string, CallbackOptions>> = {
  model: keyof typeof MODEL,
  stream?: boolean,
  callbackOptions?: TCallbackOptions
}

export type CallbackOptions = {
  onTokenGenerated?: (token: string) => void;
  onTokenGenerationStarted?: (generationId?: string) => void;
  onTokenGenerationEnded?: (result: string, generationId?: string) => void;
}
