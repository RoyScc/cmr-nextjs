// src/components/Preloader.jsx
"use client";
import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [stage, setStage] = useState('loading');

  useEffect(() => {
    // 1. A los 1.5 segundos, ordenamos que la pantalla se divida
    const timer1 = setTimeout(() => {
      setStage('splitting');
    }, 900); 

    // 2. A los 2.5 segundos (cuando termina la animación), borramos el preloader
    const timer2 = setTimeout(() => {
      setStage('done');
    }, 1500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Si ya terminó, no renderizamos nada
  if (stage === 'done') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex overflow-hidden">
      
      {/* Mitad Izquierda */}
      <div 
        className={`w-1/2 h-full bg-cmr-azul transition-transform duration-1000 ease-in-out ${
          stage === 'splitting' ? '-translate-x-full' : 'translate-x-0'
        }`}
      ></div>
      
      {/* Mitad Derecha */}
      <div 
        className={`w-1/2 h-full bg-cmr-azul transition-transform duration-1000 ease-in-out ${
          stage === 'splitting' ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Contenido Central */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          stage === 'splitting' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Contenedor relativo para poder empalmar el círculo y el corazón */}
        <div className="relative flex items-center justify-center w-24 h-24">
          
          {/* 1. Círculo animado giratorio  */}
          {/* Usamos border-t-white para que solo el borde superior sea blanco sólido, y el resto transparente */}
          <div className="absolute inset-0 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          
          {/* 2. Círculo exterior adicional girando al revés (Opcional, le da más nivel) */}
          <div className="absolute -inset-2 border-2 border-white/10 border-b-white rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

          {/* 3. Ícono central con pulso */}
          <i className="pi pi-heart-fill text-4xl text-white animate-pulse"></i>
          
        </div>
      </div>

    </div>
  );
}