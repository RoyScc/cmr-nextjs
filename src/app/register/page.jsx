// src/app/registro/page.jsx
"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegistro = (e) => {
    e.preventDefault();
    // Acá iría la lógica para enviar los datos a tu API/Base de datos
    console.log("Registrando usuario:", { nombre, email });
    
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src="/imagotipo-cmr.svg" alt="CMR" className="w-20 h-20" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Crear Cuenta</h2>
          <p className="text-gray-500 text-sm mt-2">Unite al portal de pacientes del CMR</p>
        </div>

        <form onSubmit={handleRegistro}>
          
          <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 font-bold text-sm mb-2">
              Nombre Completo
            </label>
            <InputText
              id="nombre"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-bold text-sm mb-2">
              Correo Electrónico
            </label>
            <InputText
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="ejemplo@cmr.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold text-sm mb-2">
              Contraseña
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              toggleMask
              promptLabel="Elige una contraseña"
              weakLabel="Débil"
              mediumLabel="Media"
              strongLabel="Fuerte"
              inputClassName="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            label="Registrarse"
            icon="pi pi-user-plus"
            className="w-full p-3 font-bold bg-cmr-naranja border-none hover:bg-cmr-naranja-oscuro rounded-lg text-white transition-colors mb-6"
            type="submit"
          />

          <div className="text-center border-t border-gray-200 pt-6">
            <span className="text-gray-600 text-sm">¿Ya tienes una cuenta? </span>
            <span
              onClick={() => router.push('/login')}
              className="font-bold text-cmr-azul text-sm hover:underline cursor-pointer"
            >
              Iniciar sesión
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}