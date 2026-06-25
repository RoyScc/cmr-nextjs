// src/app/(web)/turnos/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import Profesionales from "@/lib/profesionales"; 
import { useTurnos } from "@/context/TurnosContext";

const horariosDisponibles = [
  { label: "Lunes - 09:00 hs", value: "Lunes - 09:00 hs" },
  { label: "Martes - 10:30 hs", value: "Martes - 10:30 hs" },
  { label: "Miércoles - 15:00 hs", value: "Miércoles - 15:00 hs" },
  { label: "Jueves - 11:30 hs", value: "Jueves - 11:30 hs" },
];

export default function TurnosPage() {
  const router = useRouter();
  const { addTurno } = useTurnos();  //para agregar el turno a la lista de turnos
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    consulta: "",
    diaHora: null,
    profesional: null,
  });

  // para el dropdown de profesionales del formulario
  const opcionesProfesionales = Profesionales.map((doc) => ({
    label: `${doc.nombre} - ${doc.especialidad}`,
    value: doc.nombre,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevoTurno = { 
      ...formData, 
      id: Date.now() 
    };

    addTurno(nuevoTurno);
    
    router.push("/turnos/exito");
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12 px-6 flex justify-center">
      <div className="bg-white p-8 md:p-10 shadow-lg rounded-2xl w-full max-w-2xl border-t-4 border-t-[#295876]">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#295876] mb-2">Solicitar Turno</h1>
          <p className="text-gray-600">Completa tus datos para agendar una cita en el CMR.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-bold text-sm mb-2">Nombre</label>
              <InputText
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89CFE5]"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-sm mb-2">Apellido</label>
              <InputText
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89CFE5]"
                value={formData.apellido}
                onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold text-sm mb-2">Motivo de la consulta</label>
            <InputText
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#89CFE5]"
              placeholder="Ej: Control de asma, Espirometría..."
              value={formData.consulta}
              onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-bold text-sm mb-2">Profesional</label>
              <Dropdown
                value={formData.profesional}
                options={opcionesProfesionales}
                onChange={(e) => setFormData({ ...formData, profesional: e.value })}
                placeholder="Seleccione un médico"
                className="w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold text-sm mb-2">Día y Hora</label>
              <Dropdown
                value={formData.diaHora}
                options={horariosDisponibles}
                onChange={(e) => setFormData({ ...formData, diaHora: e.value })}
                placeholder="Seleccione horario"
                className="w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <Button
            label="Confirmar Turno"
            icon="pi pi-calendar-plus"
            className="w-full p-4 font-bold bg-[#C75629] border-none hover:bg-[#E99128] rounded-xl text-white transition-colors mt-4"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}