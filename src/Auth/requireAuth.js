import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import NotFound from "../Pages/404page/NotFound";

const RequireAuth = ({ allowedRoles }) => {
  const user = useAuth();

  const isAllowed = allowedRoles.includes(user.role);

  return !(user.authenticated && isAllowed) ? <Outlet /> : <NotFound />;
};

export default RequireAuth;
