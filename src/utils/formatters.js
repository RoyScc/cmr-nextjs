// src/utils/formatters.js
export function formatNombreTurno(nombre, apellido) {
    if (!nombre || !apellido) return "Paciente Anónimo";
    return `${nombre} ${apellido}`.trim();
  }
  
  export function formatHora(horaString) {
    if (!horaString) return "";
    // Si viene "09:00:00", devuelve "09:00"
    return horaString.substring(0, 5);
  }