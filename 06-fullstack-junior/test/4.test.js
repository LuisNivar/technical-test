import { leerArchivos } from "../solutions/index.js";

import { equal } from "node:assert/strict";
import { describe, it } from "node:test";

describe("4. leerArchivos", () => {
  it("4. leerArchivos", async () => {
    const mensaje = await leerArchivos();
    equal(mensaje, "Hello what's up?");
  });
});
