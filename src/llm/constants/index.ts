export const URL = "http://llm-server.j4ndrw:11434/v1";
export const MODEL = {
  tinyllama: "tinyllama",
  llama2: "llama2",
  "llama2-uncensored": "llama2-uncensored",
  "qwen:0.5b": "qwen:0.5b",
  "qwen:1.8b": "qwen:1.8b",
  mistral: "mistral",
  // TODO(j4ndrw): Add more models here
} as const;
