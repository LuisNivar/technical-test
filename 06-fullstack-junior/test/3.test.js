import { procesarArchivo } from "../solutions/index.js";
import { procesarArchivoPromise } from "../solutions/index.js";

import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { afterEach, describe, it } from "node:test";

describe("3. procesarArchivoPromise", () => {
  afterEach(() => {
    try {
      unlinkSync("output.txt");
    } catch {
      /* empty */
    }
  });

  it("3.1. procesarArchivo", (t, done) => {
    writeFileSync("input.txt", "gogogo");
    procesarArchivo((err) => {
      ifError(err);
      readFile("output.txt", "utf8").then((contenido) => {
        equal(contenido, "GOGOGO");
        done();
      });
    });
  });

  it("3.1. procesarArchivoPromise", async () => {
    writeFileSync("input.txt", "hola");
    await procesarArchivoPromise();
    const contenido = await readFile("output.txt", "utf8");
    equal(contenido, "HOLA");
  });
});
