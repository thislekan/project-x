import express from "express";
import socketIO from "socket.io";
import http from "http";

import { connected, disconnected, onEmitSomething } from "./on";

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  connected();

  socket.on("emitSomething", (data) => onEmitSomething(socket, data));

  socket.on("disconnect", disconnected);
});

export default server;
