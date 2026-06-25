// src/app/(admin)/login/page.jsx
"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
// import axios from 'axios';
// import fondosalaespera from '@public/fondosalaespera.jpg';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.clear(); 
    console.log({usuario: email, contraseña: password}); 
    localStorage.setItem(
      "usuario",
      JSON.stringify({ rol: "admin", email: email }),
    );
    // alert("Login exitoso");
    // router.push("/admin");
  };

  // const handleLogin = (e) => {
  //   console.log(e.target.value, e.target.id);
  //   e.preventDefault();
  //   localStorage.clear();
  //   localStorage.setItem(
  //     "usuario",
  //     JSON.stringify({ rol: "admin", email: email }),
  //   );
  //   alert("Login exitoso");
  //   router.push("/admin");
  // };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/fondosalamedica.jpg')", 
      }}
    >
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src="/isotipo-cmr.svg" alt="CMR" className="w-20 h-20" />
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold text-sm mb-2"
            >
              Correo Electrónico
            </label>
            <InputText
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="ejemplo@cmr.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold text-sm mb-2"
            >
              Contraseña
            </label>
            <Password
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              className="w-full"
              toggleMask
              inputClassName="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <span
              onClick={() => router.push("/recuperar-password")}
              className="font-medium pt-6 text-cmr-azul text-sm hover:underline cursor-pointer"
            >
              ¿Olvidaste tu contraseña?
            </span>
            <span className="text-sm pt-6">
              ¿No tienes cuenta? 
              <a 
                href="/register" 
                className="font-semibold text-cmr-naranja hover:underline cursor-pointer"
              >
                Regístrate
              </a>
            </span>

          </div>

          <Button
            label="Ingresar"
            icon="pi pi-sign-in"
            className="w-full p-3 font-bold bg-cmr-naranja border-none hover:bg-cmr-naranja-oscuro rounded-lg text-white transition-colors"
            type="submit"
          />
        </form>


      </div>

    </div>
  );
}

