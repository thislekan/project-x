import React, { Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "../components/pages/landingPage/LandingPage";
import LoggedInUser from "../components/pages/loggedIn";
import RestrictedPages from "./restricted/restricted";

const ProtectedRoutes = React.lazy(() => import("./protectedRoutes"));
const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/loggedIn/:access_token/:refresh_token"
          element={<LoggedInUser />}
        />
        <Suspense fallback={<div>This is loading...</div>}>
          <ProtectedRoutes>
            <RestrictedPages />
          </ProtectedRoutes>
        </Suspense>
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRoutes;
