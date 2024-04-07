import { CallbackOptions } from "./types";

export const defaultLLMCallbacks = {
  display: {
    onTokenGenerated: (token) => process.stdout.write(token),
    onTokenGenerationEnded: () => process.stdout.write("\n"),
  },
  logger: {
    onTokenGenerationStarted: () => console.log("[GENERATING]"),
    onTokenGenerationEnded: (result) => {
      console.log(`[RESULT]\n${result}`);
    },
  },
  profiler: {
    onTokenGenerationStarted: (generationId) => {
      console.log("[PROFILER START]");
      console.time(generationId);
    },
    onTokenGenerationEnded: (_, generationId) => {
      console.log("[PROFILER END]");
      console.timeEnd(generationId);
    },
  },
} satisfies Record<string, CallbackOptions>;
