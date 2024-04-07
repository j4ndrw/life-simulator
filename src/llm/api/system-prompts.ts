export const systemPrompt = {
  zeroShot: {
    chainOfThought: [
      "You are an intelligent agent, with reasoning capabilities.",
      "Whenever you are asked a question, prepend your answer with the literal words:",
      "\"Let's think step-by-step.\".",
      "Then, proceed to reason about the question until you reach the correct answer.",
    ].join("\n")
  }
} as const;
