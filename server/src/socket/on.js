import { emitSomething } from "./emits";

export const connected = () => console.log("New client just connected");
export const disconnected = () => console.log("Client is disconnected");

export const onEmitSomething = (socket, data) => {
  console.log(`emitted something (like: ${data}) to the backend`);
  emitSomething(socket);
};
