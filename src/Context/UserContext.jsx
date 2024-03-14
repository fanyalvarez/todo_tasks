import { createContext, useState, useContext, useEffect } from "react";
import {registerRequest, loginRequest} from '../api/user'

export const AuthContext = createContext();
//useauth trae todos los datos de authcontextprovider
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("Useauth must be used whithin an AuthProvider");
    }
    return context;
  };

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const signup = async (user) => {
      try {
        const resp = await registerRequest(user);
        setUser(resp);
        setIsAuthenticated(false); 
      } catch (error) {
        console.error(error);
      }
    };
  
    const signin = async (user) => {
      try {
        const resp = await loginRequest(user);
        console.log(resp, ":resp");
        setIsAuthenticated(true);
        setUser(resp);
        
    } catch (error) {
        console.error(error);
      }
    };
  
    const logout = ()=>{
      Cookies.remove("token")
      setIsAuthenticated(false)
      setUser(null)
    }

  
    return (
      <AuthContext.Provider
        value={{user, isAuthenticated, signup, signin , logout}}>
        {children}
      </AuthContext.Provider>
    );
  };
