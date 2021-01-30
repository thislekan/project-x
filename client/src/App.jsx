import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import Routes from "./routes";

const ENDPOINT = "http://127.0.0.1:8085/";
const App = () => {
  useEffect(() => {
    console.log("shebi it got here");
    const socket = socketIOClient(ENDPOINT);

    socket.emit("emitSomething", "FUCK THIS");
    socket.on("fromAPI", (data) => console.log({ data }));
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
