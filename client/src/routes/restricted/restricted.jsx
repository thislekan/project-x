import { Route, Routes, BrowserRouter } from "react-router-dom";

const Foo = () => <h1 style={{ color: "red", height: "100vh" }}>Me! ME!!!</h1>;
const RestrictedPages = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Foo />} path="/me" />
    </Routes>
  </BrowserRouter>
);

export default RestrictedPages;
