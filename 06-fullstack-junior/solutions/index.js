import fs from "node:fs";
import net from "node:net";

// 1
export const ping = (ip, callback) => {
  const startTime = globalThis.process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    callback(null, { time: globalThis.process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    callback(err);
    throw err;
  });
};

// 2
export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: "datos importantes" }), 200);
  });
}

// 3
export function procesarArchivo(callback) {
  const handleRead = (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      callback(error);
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile("output.txt", textoProcesado, handleWrite);
  };

  const handleWrite = (error) => {
    if (error) {
      console.error("Error guardando archivo:", error.message);
      callback(error);
    }

    console.log("Archivo procesado y guardado con éxito");
    callback(null);
  };

  fs.readFile("input.txt", "utf8", handleRead);
}

//3.1 Sequential Async
export async function procesarArchivoPromise() {
  const content = await fs.promises.readFile("input.txt", "utf8").catch(() => {
    console.error("Error reading file");
    return "";
  });

  const processedText = content.toUpperCase();
  await fs.promises.writeFile("output.txt", processedText).catch((e) => {
    console.error("Error writing file");
    throw new Error(e);
  });
}
