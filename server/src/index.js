import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import socketIO from "socket.io";

import config from "config";
import routes from "routes";

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(cookieParser());
app.use(routes);

const emitSomething = (socket) =>
  socket.emit("fromAPI", "Emitting something back to client");

app.get("/", (_req, res) =>
  res.status(200).json({
    message: "Welcome to the Project-X API endpoints.",
  })
);

io.on("connection", (socket) => {
  console.log("New client just connected");

  socket.on("emitSomething", (data) => {
    console.log(`emitted something (like: ${data}) to the backend`);
    emitSomething(socket);
  });

  socket.on("disconnect", () => {
    console.log("Client is disconnected");
  });
});

server.listen(config.PORT, () =>
  console.log(`App is now live on port ${config.PORT}`)
);
