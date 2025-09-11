import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic } from "./vite.js";

const app = express();
const server = createServer(app);
const PORT = 3000;

async function start() {
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  server.listen(PORT, "localhost", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
