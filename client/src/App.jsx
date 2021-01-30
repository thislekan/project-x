import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import Routes from "./routes";

const { REACT_APP_BACKEND_URL } = process.env;
const App = () => {
  useEffect(() => {
    const socket = socketIOClient(REACT_APP_BACKEND_URL);
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
