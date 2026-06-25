// src/app/recuperar-password/page.jsx
"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function RecuperarPasswordPage() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false); 
  const router = useRouter();

  const handleRecuperar = (e) => {
    e.preventDefault();
    console.log("Enviando enlace de recuperación a:", email);
    setEnviado(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
        
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <img src="/imagotipo-cmr.svg" alt="CMR" className="w-20 h-20" />
          </div>
        </div>

        {!enviado ? (
          <form onSubmit={handleRecuperar}>
            <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
              Ingresá tu correo electrónico y te enviaremos las instrucciones
              para restablecer tu acceso.
            </p>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold text-sm mb-2">
                Correo Electrónico
              </label>
              <InputText
                id="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="tucorreo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button
              label="Enviar enlace"
              icon="pi pi-envelope"
              className="w-full p-3 font-bold bg-cmr-naranja border-none hover:bg-cmr-naranja-oscuro rounded-lg text-white mb-6"
              type="submit"
            />

            <div className="text-center">
              <span
                onClick={() => router.push("/login")}
                className="font-medium text-cmr-azul text-sm hover:underline cursor-pointer"
              >
                Volver al inicio de sesión
              </span>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <i className="pi pi-check-circle text-green-500 text-6xl mb-4"></i>
            <h3 className="text-gray-900 font-bold text-2xl mb-2">
              ¡Correo enviado!
            </h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Revisá tu bandeja de entrada y sigue los pasos para restablecer tu contraseña.
            </p>
            <Button
              label="Volver al Login"
              className="w-full p-3 font-bold bg-white text-cmr-azul border-2 border-cmr-azul rounded-lg hover:bg-cmr-celeste-bg"
              onClick={() => router.push("/login")}
            />
          </div>
        )}
      </div>
    </div>
  );
}