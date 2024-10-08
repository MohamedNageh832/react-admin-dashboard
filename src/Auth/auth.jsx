import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { BASE_URL } from "../utils/constants";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data } = useFetch(`${BASE_URL}/account/refresh`);
  const [user, setUser] = useState(data || null);
  const navigate = useNavigate();

  const login = async (userData) => {
    setUser(userData);
    navigate(`/staff/${userData.role}`);
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const redirect = () => {
    navigate(`/staff/${user.role}`);
  };

  return (
    <AuthContext.Provider value={{ user, login, redirect, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
