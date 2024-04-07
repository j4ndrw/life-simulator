import { createLLM } from "./llm/api";
import { systemPrompt } from "./llm/api/system-prompts";

const llm = createLLM({ model: "llama2-uncensored", stream: true });
const englishAgent = llm.createAgent(undefined, { name: "John" });

async function main() {
  await englishAgent.generate(
    `
      A juggler can juggle 16 balls.
      Half of the balls are golf balls, and half of the golf balls are blue.
      How many blue golf balls are there?
    `,
    {
      callbacks: ["display"],
      temporarySystemPrompt: systemPrompt.zeroShot.chainOfThought,
    },
  );
}

main();
