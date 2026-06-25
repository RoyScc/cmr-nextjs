// src/context/TurnosContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const TurnosContext = createContext();

export function TurnosProvider({ children }) {
  const [turnos, setTurnos] = useState([]);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true);
    const turnosGuardados = window.localStorage.getItem("turnosTotales");

    if (turnosGuardados) {
      setTurnos(JSON.parse(turnosGuardados));
    }

  }, []);

  const saveTurnos = (nuevosTurnos) => {
    setTurnos(nuevosTurnos);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("turnosTotales", JSON.stringify(nuevosTurnos));
    }
  };

  
  const addTurno = (turno) => {
    const nuevoTurno = {
      ...turno,
      id: Date.now(),
    };
    saveTurnos([...turnos, nuevoTurno]);
  };

  const updateTurno = (id, datosActualizados) => {
    const turnosActualizados = turnos.map((turno) =>
      turno.id === id ? { ...turno, ...datosActualizados } : turno
    );
    saveTurnos(turnosActualizados);
  };

  const deleteTurno = (id) => {
    const turnosFiltrados = turnos.filter((turno) => turno.id !== id);
    saveTurnos(turnosFiltrados);
  };

  if (!isMounted) return null;

  return (
    <TurnosContext.Provider value={{ turnos, addTurno, updateTurno, deleteTurno }}>
      {children}
    </TurnosContext.Provider>
  );
}


export const useTurnos = () => useContext(TurnosContext);