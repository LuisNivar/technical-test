import { describe, it, beforeEach, afterEach } from "node:test";
import { equal } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { config } from "../../solutions/dotenv.js";

describe("1. dotenv", () => {
  beforeEach(() => {
    // clean process.env
    for (const key of Object.keys(globalThis.process.env)) {
      delete globalThis.process.env[key];
    }
  });

  afterEach(() => {
    try {
      unlinkSync(".env");
    } catch {
      /* empty */
    }

    try {
      unlinkSync("./test/.env.local");
    } catch {
      /* empty */
    }
  });

  it("1.1. load .env file", () => {
    // create .env file in root directory
    writeFileSync(".env", 'PORT=3000\nTOKEN="123abc"');
    config();

    equal(globalThis.process.env.PORT, "3000");
    equal(globalThis.process.env.TOKEN, "123abc");
  });

  it("1.2. load .env file from custom path", () => {
    // create .env file in root directory
    writeFileSync("./test/.env.local", 'PORT=3000\nTOKEN="123abc"');
    config({ path: "./test/.env.local" });

    equal(globalThis.process.env.PORT, "3000");
    equal(globalThis.process.env.TOKEN, "123abc");
  });

  it("1.3 it works even without .env file", () => {
    config();
    equal(globalThis.process.env.TOKEN, undefined);
  });

  it("1.4 dont use dotenv dependency", () => {
    // check that dotenv dependency is not installed
    try {
      const require = createRequire(import.meta.url);
      require("dotenv");
    } catch (error) {
      equal(error.code, "MODULE_NOT_FOUND");
    }
  });
});
