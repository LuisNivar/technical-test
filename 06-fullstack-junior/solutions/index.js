import net from "node:net";

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

export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: "datos importantes" }), 200);
  });
}
