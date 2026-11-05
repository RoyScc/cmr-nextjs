// CMR/cmr-frontend/src/app/(auth)/login/page.jsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/turnos");
    }
  }, [isAuthenticated, router]);

  // Simula el ingreso hasta conectar la API. Deja la sesión activa.
  const handleLogin = (e) => {
    e.preventDefault();
    login("token-simulado");
  };

  return (
    <div className="flex bg-cmr-celeste-bg items-center justify-center min-h-screen">
      <div className=" border-2 border-cmr-azul-medio border-solid surface-card p-5 shadow-4 items-center justify-center border-round rounded-lg sm:w-26rem">

        <div className=" mb-10">
          <div className="p-2 flex px-4 items-center justify-center">
            <Image
              src="/imagotipo-cmr.svg"
              alt="CMR"
              width={120}
              height={120}
              priority
            />
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="text-center mb-4">
            <label
              htmlFor="email"
              className="block text-900 font-medium text-sm mb-2"
            >
              Correo Electrónico
            </label>
            <InputText
              size="large"
              id="email"
              type="email"
              className="w-full p-2"
              placeholder="ejemplo@cmr.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="text-center mb-4">
            <label
              htmlFor="password"
              className="block text-900 font-medium text-sm text-center mb-2"
            >
              Contraseña
            </label>
            <Password
              size="large"
              inputId="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              className="w-full text-center"
              toggleMask
              inputClassName="w-full p-2"
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            size="medium"
            label="Ingresar"
            icon="pi pi-sign-in"
            className="w-full p-2 font-bold bg-cmr-azul-medio border-1 transition-colors"
            type="submit"
          />

          <div className="text-center mt-4">
            <Link
              href="/login/register"
              className="font-medium no-underline text-blue-500 text-sm hover:underline hover:text-blue-700 cursor-pointer"
            >
              ¿No tenés cuenta? Registrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
