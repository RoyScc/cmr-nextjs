"use client";
import "@/app/globals.css";
import React from "react";
import { Button } from "primereact/button";
import Link from "next/link"; // Importamos Link en lugar de useRouter
import Profesionales from "@/lib/profesionales";

export default function CardProfessional() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {Profesionales.map((doc, index) => (
        <div className="p-3" key={index}>
          <div className="flip-card">
            
            <Link
              href={`/profesionales/${doc.id}`}
              className="flip-card-inner block" 
            >
              {/* FRENTE */}
              <div className="flip-card-front">
                <img src={doc.foto} alt={doc.nombre} className="doctor-img" />
                <div className="doctor-name-front">{doc.nombre}</div>
              </div>

              {/* DORSO */}
              <div className="flip-card-back">
                <h3 className="font-bold text-indigo-200 text-center">{doc.nombre}</h3>
                <div className="text-indigo-200 font-semibold mb-3">
                  {doc.especialidad}
                </div>
                <div className="text-sm opacity-90 mb-2">{doc.matricula}</div>
                <p className="mb-4 text-center px-2">{doc.desc}</p>

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