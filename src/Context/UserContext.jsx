import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/user";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Useauth must be used whithin an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (user) => {
    try {
      const resp = await registerRequest(user);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
    }
  };

  const signin = async (data) => {
    try {
      const resp = await loginRequest(data);
      setIsAuthenticated(true);
      setToken(resp);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
