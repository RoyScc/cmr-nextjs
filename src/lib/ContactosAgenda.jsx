const datosTurnos = [
  {
    id: 1,
    fecha: "2026-04-10",
    hora: "08:00",
    paciente: "Carlos López",
    servicio: "Espirometría",
    observaciones: "Debe consulta anterior",
    estado: "Confirmado",
  },
  {
    id: 2,
    fecha: "2026-04-10",
    hora: "08:45",
    paciente: "María Gómez",
    servicio: "Consulta Neumonológica",
    observaciones: "Ninguna",
    estado: "En sala de espera",
  },
  {
    id: 3,
    fecha: "2026-04-10",
    hora: "09:30",
    paciente: "Disponible",
    servicio: "-",
    observaciones: "Ninguna",
    estado: "Libre",
  },
  {
    id: 4,
    fecha: "2026-04-12",
    hora: "10:00",
    paciente: "Roberto Sánchez",
    servicio: "Rehabilitación Física",
    observaciones: "Ninguna",
    estado: "Pendiente",
  },
  {
    id: 5,
    fecha: "2026-04-15",
    hora: "11:00",
    paciente: "Ana Torres",
    servicio: "Salud Mental",
    observaciones: "Ninguna",
    estado: "Confirmado",
  },
];

const serviciosOpciones = [
  { label: "Espirometría", value: "espirometria" },
  { label: "Consulta Neumonológica", value: "neumonologia" },
  { label: "Rehabilitación Física", value: "rehabilitacion" },
];


export { datosTurnos, serviciosOpciones};
