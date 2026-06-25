// src/app/(web)/turnos/exito/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { useTurnos } from "@/context/TurnosContext";

export default function TurnoExitoPage() {
  const router = useRouter();
  const { turnos, updateTurno } = useTurnos(); //para obtener y actualizar los turnos
  const [datosTurno, setDatosTurno] = useState(null); //para almacenar los datos del turno
  const [isEditing, setIsEditing] = useState(false); //para saber cuando este editando los datos

  useEffect(() => {
    if (turnos.length > 0) {
      setDatosTurno(turnos[turnos.length - 1]);
    } else {
      router.push("/turnos");
    }
  }, [router, turnos]);

  // función para guardar los cambios editados
  const handleGuardarEdicion = () => {
    updateTurno(datosTurno.id, datosTurno);
    setIsEditing(false);
  };
 
  if (!datosTurno) return null; 

  return (

    <div className="min-h-[80vh] bg-gray-50 py-12 px-6 flex justify-center items-start">
      <div className="bg-white p-8 md:p-10 shadow-lg rounded-2xl w-full max-w-2xl text-center border-t-4 border-t-[#89CFE5]">
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="pi pi-check text-4xl text-green-500"></i>
        </div>

        <h1 className="text-3xl font-bold text-[#295876] mb-2">¡Turno Registrado!</h1>
        
        <p className="text-gray-600 mb-8">Confirma tus datos y realiza la reserva.</p>

        {/* TARJETA DE DATOS DEL TURNO */}
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-left relative">
          
          {/* Botón para activar edición */}
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="absolute top-4 right-4 text-[#4782A1] hover:text-[#295876] transition-colors"
              title="Corregir un error"
            >
              <i className="pi pi-pencil text-xl"></i>
            </button>
          )}

          <div className="space-y-4">
            {/* Campo: Nombre Completo */}
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Paciente</span>
              {isEditing ? (
                <div className="flex gap-2">
                  <InputText 
                    className="p-2 border rounded text-sm w-full" 
                    value={datosTurno.nombre} 
                    onChange={(e) => setDatosTurno({...datosTurno, nombre: e.target.value})} 
                  />
                  <InputText 
                    className="p-2 border rounded text-sm w-full" 
                    value={datosTurno.apellido} 
                    onChange={(e) => setDatosTurno({...datosTurno, apellido: e.target.value})} 
                  />
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-800">{datosTurno.nombre} {datosTurno.apellido}</span>
              )}
            </div>

            {/* Campo: Profesional */}
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Atiende</span>
              <span className="text-lg font-bold text-[#295876]">{datosTurno.profesional}</span>
            </div>

            {/* Campo: Fecha y Hora */}
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Día y Hora</span>
              <span className="text-lg font-bold text-[#C75629]">{datosTurno.diaHora}</span>
            </div>

            {/* Campo: Motivo */}
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Motivo</span>
              {isEditing ? (
                <InputText 
                  className="p-2 border rounded text-sm w-full" 
                  value={datosTurno.consulta} 
                  onChange={(e) => setDatosTurno({...datosTurno, consulta: e.target.value})} 
                />
              ) : (
                <span className="text-gray-700">{datosTurno.consulta}</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          {isEditing ? (
            <Button 
              label="Guardar Corrección" 
              icon="pi pi-save" 
              className="bg-[#5AACA8] border-none px-6 py-3 font-bold rounded-full text-white"
              onClick={handleGuardarEdicion}
            />
          ) : (
            <Button 
              label="Volver al Inicio" 
              icon="pi pi-home" 
              className="bg-transparent text-[#295876] border-2 border-[#295876] hover:bg-blue-50 px-6 py-3 font-bold rounded-full"
              onClick={() => router.push("/")}
            />
          )}
        </div>

      </div>
    </div>
  );
}