"use client";

import React, { useState, useEffect } from "react";
import AlertaModal from "@/components/AlertModal";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function PerfilProfesional() {
  const { id } = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth(); 

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch("`${process.env.NEXT_PUBLIC_API_URL}`/api/profesionales/${id}/`");
        if (!res.ok) {
           throw new Error("Profesional no encontrado o acceso denegado.");
        }
        const data = await res.json();
        setDoctor(data);
      } catch (err) {
        console.error("Error al cargar detalle del profesional:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleSolicitarTurno = () => {
    if (isAuthenticated) {
      router.push("/turnos");
    } else {
      setMostrarAlerta(true);
    }
  };

  const handleCerrarAlerta = () => {
    setMostrarAlerta(false);
    router.push("/login");
  };

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-bold text-gray-500">Cargando perfil del profesional...</div>;
  }

  if (error || !doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Profesional no encontrado
        </h1>
        <p className="text-red-500 mt-2">{error}</p>
        <Link href="/" className="mt-4 text-cmr-azul hover:underline font-bold">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-12 px-6 relative bg-gray-50">
      <AlertaModal 
        visible={mostrarAlerta} 
        mensaje="Debes iniciar sesión con tu cuenta para poder solicitar un turno."
        onClose={handleCerrarAlerta}
      />

      <div className="max-w-lg mt-8 mx-auto rounded-2xl shadow-lg bg-white border border-gray-100 overflow-hidden">
        <div className="h-1 bg-cmr-naranja" />

        <div className="p-8 flex flex-col items-center text-center">
          <img
            src={doctor.foto || "/medico2.jpg"}
            alt={doctor.nombre_completo}
            className="w-24 h-24 rounded-full object-cover border-4 border-cmr-celeste mb-5"
          />

          <span className="text-xs font-semibold tracking-wider uppercase text-cmr-naranja mb-1">
            {doctor.especialidad_nombre || "Especialista"}
          </span>

          <h1 className="text-2xl font-bold text-cmr-azul mb-1">
            {doctor.nombre_completo}
          </h1>

          <span className="text-sm text-gray-500 mb-5">
            Matrícula {doctor.matricula}
          </span>

          <p className="text-gray-600 leading-relaxed mb-8">{doctor.bio || "Sin biografía disponible."}</p>

          <button
            onClick={handleSolicitarTurno}
            type="button"
            className="w-full bg-cmr-naranja hover:bg-[#b05822] transition text-white font-semibold py-3 px-6 rounded-xl"
          >
            Solicitar Turno
          </button>

          <Link
            href="/"
            className="mt-5 text-sm text-gray-500 hover:text-cmr-azul transition font-semibold"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}