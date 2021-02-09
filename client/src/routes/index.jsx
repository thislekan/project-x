import { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "../components/pages/landingPage";
import LoggedInChecker from "../components/pages/loggedIn";
import RestrictedPages from "./restricted";
import NotFound from "../components/pages/404";

const ProtectedRoutes = lazy(() => import("./protectedRoutes"));
const Suspended = () => (
  <Suspense fallback={<div>This is loading...</div>}>
    <ProtectedRoutes>
      <RestrictedPages />
    </ProtectedRoutes>
  </Suspense>
);

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="loggedIn/:access_token/:refresh_token"
          element={<LoggedInChecker />}
        />
        <Route path="users/*" element={<Suspended />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
