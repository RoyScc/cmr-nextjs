"use client";

import React, { useState } from "react";
import profesionales from "@/lib/profesionales";
import AlertaModal from "@/components/AlertModal";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function PerfilProfesional() {
  const { id } = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth(); //el estado Global

  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const doctor = profesionales.find((doc) => String(doc.id) === String(id));

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Profesional no encontrado
        </h1>
        <Link href="/" className="mt-4 text-cmr-azul hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const handleSolicitarTurno = () => {
    if (isAuthenticated) {
      router.push("/turnos");
    } else {
      setMostrarAlerta(true);
    }
  };

  const handleCerrarAlerta = () => {
    setMostrarAlerta(false);
    // cuando cierre la alerta lo mando al login
    router.push("/login");
  };

  return (
    <div className="min-h-[60vh] py-12 px-6 relative">
      {/* Nuestro componente reutilizable extra */}
      <AlertaModal 
        visible={mostrarAlerta} 
        mensaje="Debes iniciar sesión con tu cuenta para poder solicitar un turno."
        onClose={handleCerrarAlerta}
      />

      <div className="max-w-lg mt-8 mx-auto rounded-2xl shadow-lg bg-white border border-gray-100 overflow-hidden">
        <div className="h-1 bg-cmr-naranja" />

        <div className="p-8 flex flex-col items-center text-center">
          <img
            src={doctor.foto}
            alt={doctor.nombre}
            className="w-24 h-24 rounded-full object-cover border-4 border-cmr-celeste mb-5"
          />

          <span className="text-xs font-semibold tracking-wider uppercase text-cmr-naranja mb-1">
            {doctor.especialidad}
          </span>

          <h1 className="text-2xl font-bold text-cmr-azul mb-1">
            {doctor.nombre}
          </h1>

          <span className="text-sm text-gray-500 mb-5">
            Matrícula {doctor.matricula}
          </span>

          <p className="text-gray-600 leading-relaxed mb-8">{doctor.desc}</p>

          {/* Reemplazamos el Link por un botón con onClick para interceptar la acción */}
          <button
            onClick={handleSolicitarTurno}
            type="button"
            className="w-full bg-cmr-naranja hover:bg-[#b05822] transition text-white font-semibold py-3 px-6 rounded-xl"
          >
            Solicitar Turno
          </button>

          <Link
            href="/"
            className="mt-5 text-sm text-gray-500 hover:text-cmr-azul transition"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}