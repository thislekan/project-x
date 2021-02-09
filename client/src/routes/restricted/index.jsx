import { Route, Routes } from "react-router-dom";

const Foo = () => <h1 style={{ color: "red", height: "100vh" }}>Me! ME!!!</h1>;
const RestrictedPages = () => (
  <Routes>
    <Route element={<Foo />} path="/me" />
  </Routes>
);

export default RestrictedPages;
