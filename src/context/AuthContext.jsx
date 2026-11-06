"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isStaff, setIsStaff] = useState(false); // Nuevo estado para el rol
  const [isInitialized, setIsInitialized] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedToken = localStorage.getItem("cmr_token");
    const storedIsStaff = localStorage.getItem("cmr_is_staff"); // Recuperamos el rol
    
    if (storedToken) {
      setToken(storedToken);
      setIsStaff(storedIsStaff === "true");
    }
    setIsInitialized(true);
  }, []);

  // login recibe un objeto con los datos de la API
  const login = (data) => {
    setToken(data.token);
    setIsStaff(data.is_staff);
    
    localStorage.setItem("cmr_token", data.token);
    localStorage.setItem("cmr_is_staff", data.is_staff);
    
    if (pathname === "/login") {
       router.push("/turnos");
    }
  };

  const logout = () => {
    setToken(null);
    setIsStaff(false);
    localStorage.removeItem("cmr_token");
    localStorage.removeItem("cmr_is_staff");
    router.push("/login");
  };

  if (!isInitialized) return null;

  return (
    <AuthContext.Provider value={{ 
      token, 
      isStaff, 
      login, 
      logout, 
      isAuthenticated: !!token 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);