import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN } from "src/components/consts/localStarage";

const AuthLayout = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  if (token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthLayout;
