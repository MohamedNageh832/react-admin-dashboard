import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import NotFound from "../Pages/404page/NotFound";

const RequireAuth = ({ allowedRoles }) => {
  // const { user } = useAuth();

  const user = {
    isAuthenticated: true,
    role: "dataEntry",
    name: "ahmed",
  };

  if (user === null) return <NotFound />;

  const isAllowed = allowedRoles.includes(user.role);

  return user.isAuthenticated && isAllowed ? <Outlet /> : <NotFound />;
};

export default RequireAuth;
