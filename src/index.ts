import { app } from "./app";
import fs from "node:fs";
import https from "node:https";

const port = Number(process.env.PORT ?? 3000);
const certPath = process.env.HTTPS_CERT_PATH ?? "certs/localhost.crt";
const keyPath = process.env.HTTPS_KEY_PATH ?? "certs/localhost.key";

if (!fs.existsSync(certPath) || !fs.existsSync(keyPath)) {
  throw new Error(
    `HTTPS certificate files not found. Expected key at "${keyPath}" and cert at "${certPath}".`,
  );
}

const cert = fs.readFileSync(certPath);
const key = fs.readFileSync(keyPath);

https.createServer({ key, cert }, app).listen(port, () => {
  console.log(`HTTPS server is running on https://localhost:${port}`);
});
