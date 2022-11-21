import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const persistedToken = JSON.parse(localStorage.getItem("token"));
    const persistedName = JSON.parse(localStorage.getItem("userName"));
    const [token, setToken] = useState(persistedToken);
    const [userName, setUserName] = useState(persistedName);
  
  
    return (
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        {children}
      </AuthContext.Provider>
    )
  }

export default AuthContext;