// src/components/ClimaAPI.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { obtenerClima } from '@/app/api/clima'; // importo archivo donde hago el fetch desde la api

function MensajeSalud(temperatura, idClima) {
  if (idClima >= 200 && idClima < 600) {
    return "¡Día de llovizna y humedad! A cuidar esas gargantas y abrigarse bien para no resfriarse. ¡Mejor prevenir que curar!";
  }
  if (temperatura < 15) {
    return `¡Hoy hace frío (${temperatura}°C)! Recordá abrigar tu pecho al salir y evitar los cambios bruscos de temperatura.`;
  }
  if (temperatura >= 20 && idClima === 800) {
    return `¡Hoy hacen ${temperatura}°C a puro sol! Un clima excelente para hacer actividad física al aire libre y oxigenar los pulmones.`;
  }
  return `Temperatura actual: ${temperatura}°C. ¡Recordá ventilar tus ambientes todos los días por al menos 15 minutos para una buena salud respiratoria!`;
}

export default function ClimaAPI() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    // Ejecutamos la función importada cuando carga la página
    obtenerClima().then(data => {
      if (data) setClima(data);
    });
  }, []);

  // Mientras carga, no mostramos nada
  if (!clima || !clima.main) return null;

  const temperatura = Math.round(clima.main.temp);
  const idClima = clima.weather[0].id;
  const icono = clima.weather[0].icon;
  const urlIcono = `https://openweathermap.org/img/wn/${icono}@2x.png`;
  const mensaje = MensajeSalud(temperatura, idClima);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 my-8">
      <div className="bg-[#e8f4fa] border-l-8 border-[#295b76] rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 hover:scale-[1.01] transition-transform duration-300">
        
     
        <div className="flex items-center gap-4 min-w-max bg-white py-2 px-6 rounded-full shadow-sm">
          <img src={urlIcono} alt={clima.weather[0].description} className="w-16 h-16 drop-shadow-sm" />
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#295b76]">{temperatura}°C</span>
            <span className="text-sm text-gray-500 capitalize">{clima.weather[0].description}</span>
          </div>
        </div>

        
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            <i className="pi pi-info-circle text-[#d66f2c] mr-2"></i> {mensaje}
          </p>
        </div>

      </div>
    </div>
  );
}