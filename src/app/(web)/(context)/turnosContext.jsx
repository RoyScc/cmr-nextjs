// src/app/(context)/turnosContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const TurnosContext = createContext();

export const TurnosProvider = ({ children }) => {
  const [turno, setTurno] = useState(null);

  useEffect(() => {
    const turnoGuardado = localStorage.getItem("turnoPaciente");
    if (turnoGuardado) {
      setTurno(JSON.parse(turnoGuardado));
    }
  }, []);

  return (
    <TurnosContext.Provider value={{ turno, setTurno }}>
      {children}
    </TurnosContext.Provider>
  );
};

export const useTurnos = () => {
  return useContext(TurnosContext);
};