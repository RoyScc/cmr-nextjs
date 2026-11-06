// src/api/clima.js

export async function obtenerClima() {
  const API_KEY = "122ae5cb5d352a1dc6b384af2508c2f7";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Rio Cuarto,ar&units=metric&lang=es&appid=${API_KEY}`;

  try {
    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
      return null;
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    return null;
  }
}