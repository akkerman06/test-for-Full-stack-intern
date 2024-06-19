import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN } from "src/components/consts/localStarage";

const AppLayout = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AppLayout;
