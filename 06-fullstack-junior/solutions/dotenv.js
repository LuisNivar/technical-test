import fs from "node:fs";

export function config({ path = ".env" } = {}) {
  try {
    const env = fs.readFileSync(path, "utf-8");
    const lines = env.split("\n");

    lines.map((line) => {
      const [key, ...rest] = line.split("=");
      const value = [...rest].join("=");

      const hasQuotes =
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"));

      const valueToStore = hasQuotes ? value.slice(1).slice(0, -1) : value;

      globalThis.process.env[key] = valueToStore;
    });
  } catch (e) {
    console.error(e);

    /* empty */
  }
}

const dotenv = {
  config,
};

export default dotenv;
