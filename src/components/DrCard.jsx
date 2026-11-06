"use client";

import "@/app/globals.css";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import Link from "next/link";

export default function CardProfessional() {
  const [profesionales, setProfesionales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profesionales/`);
          if (!res.ok) {
           throw new Error("No se pudo conectar con la API o se requieren permisos.");
        }
        const data = await res.json();
        setProfesionales(data.results || data);
      } catch (err) {
        console.error("Error al cargar profesionales:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfesionales();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Cargando equipo médico...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 font-bold">Error: {error}. Revisa la consola o los permisos de tu API en Django.</div>;
  }

  if (profesionales.length === 0) {
    return <div className="text-center py-10">No hay profesionales registrados en este momento.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {profesionales.map((doc) => (
        <div className="p-3" key={doc.id}>
          <div className="flip-card">
            <Link
              href={`/profesionales/${doc.id}`}
              className="flip-card-inner block"
            >
              {/* FRENTE */}
              <div className="flip-card-front bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col items-center justify-center">
                <img 
                  src={doc.foto || "/medico2.jpg"} 
                  alt={doc.nombre_completo} 
                  className="doctor-img  object-cover  mb-4" 
                />
                <div className="doctor-name-front font-bold text-lg text-cmr-azul">
                  {doc.nombre_completo}
                </div>
              </div>

              {/* DORSO */}
              <div className="flip-card-back bg-cmr-azul rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-indigo-200 text-center text-xl mb-2">
                  {doc.nombre_completo}
                </h3>
                <div className="text-indigo-200 font-semibold mb-3 uppercase text-sm">
                  {doc.especialidad_nombre || "Especialista"}
                </div>
                <div className="text-sm opacity-90 mb-2">
                  Matrícula: {doc.matricula}
                </div>
                <p className="mb-4 text-center px-2 text-sm line-clamp-3">
                  {doc.bio || "Profesional de la salud en CMR."}
                </p>

                <Button
                  label="Ver Perfil"
                  className="rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-cmr-azul transition-colors font-bold px-4 py-2"
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}