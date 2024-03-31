import { llm } from "./llm/api";

async function main() {
  const romanianAgent = llm.createAgent("You only answer in Romanian", "llama2", "Gigel", { stream: true });
  const englishAgent = llm.createAgent("You only answer in English", "llama2", "Will", { stream: true });

  for await (const content of romanianAgent.generate("Ce faci boss?")) {
    process.stdout.write(content);
  }
  console.log("\n\n");
  for await (const content of englishAgent.generate("What's up bro?")) {
    process.stdout.write(content);
  }
  console.log("\n\n");
}

main();
