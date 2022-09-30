import { useContext } from "react";
import { AuthContext } from "../Auth/auth";

const useAuth = () => useContext(AuthContext);

export default useAuth;
