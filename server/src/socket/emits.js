export const emitSomething = (socket) =>
  socket.emit("fromAPI", "Emitting something back to client");

export const doFoo = (socket) => socket.emit("emitFoo", "doing foo");
