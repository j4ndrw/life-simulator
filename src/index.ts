import { createLLM } from "./llm/api";

const llm = createLLM({ model: "llama2-uncensored", stream: true });
const englishAgent = llm.createAgent(undefined, { name: "John" });

async function main() {
  await englishAgent.generate("Wassup bro", { callbacks: ["display"] });
}
main();
