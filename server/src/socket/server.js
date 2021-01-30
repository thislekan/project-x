import socketIO from "socket.io";

import server from "index";
import config from "config";
import { connected, disconnected, onEmitSomething } from "./on";

const io = socketIO(server);

io.on("connection", (socket) => {
  connected();

  socket.on("emitSomething", (data) => onEmitSomething(socket, data));

  socket.on("disconnect", disconnected);
});

server.listen(config.PORT, () =>
  console.log(`App is now live on port ${config.PORT}`)
);
