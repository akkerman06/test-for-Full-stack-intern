import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "src/pages/LoginPage/LoginPage";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";
import { HomePage } from "src/pages/HomePage/HomePage";

const RouteProvider = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default RouteProvider;
