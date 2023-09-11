import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  isAllowed: boolean;
};

const ProtectedRoute = ({ children, isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to='/login' />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
