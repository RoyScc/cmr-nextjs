"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Esta función simula el ingreso por ahora hasta que ponga la api del back con tokens
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem(
      "usuarioCMR",
      JSON.stringify({ rol: "admin", email: email })
    );
    router.push("/");
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

          {/* comentado hasta nuevo aviso... */}
          {/* <div className="flex align-items-center justify-content-between mb-5">
            <Link
              href="/recuperar-password"
              className="font-medium no-underline text-blue-500 text-sm hover:underline hover:text-blue-700 cursor-pointer transition-colors transition-duration-150"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div> */}

          <Button
            size="medium"
            label="Ingresar"
            icon="pi pi-sign-in"
            className="w-full p-2 font-bold bg-cmr-azul-medio border-1 transition-colors"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}