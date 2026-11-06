"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

import { useForm, Controller } from "react-hook-form"; 

//puente entre RHF y Zod
import { zodResolver } from "@hookform/resolvers/zod";
 //schemas de validacion
import { loginSchema } from "@/app/validations/loginSchema";
import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {
  const { login } = useAuth();
  const [apiError, setApiError] = useState("");

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" }
  });

  const onSubmit = async (data) => {
    setApiError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) throw new Error("Credenciales inválidas. Verifica tus datos.");
  
      const result = await res.json();
      login(result);
    } catch (error) {
      setApiError(error.message);
    }
  };

  return (
    <div className="flex bg-cmr-celeste-bg items-center justify-center min-h-screen">
      <div className="border-2 border-cmr-azul-medio border-solid surface-card p-5 shadow-4 items-center justify-center border-round rounded-lg sm:w-26rem bg-white">
        
        <div className="mb-10 text-center flex justify-center">
          <Image src="/imagotipo-cmr.svg" alt="CMR" width={120} height={120} priority />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mb-4">
            <label htmlFor="username" className="block text-900 font-medium text-sm mb-2">
              Nombre de Usuario
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <InputText
                  id="username"
                  size="large"
                  className={`w-full p-2 ${errors.username ? "p-invalid border-red-500" : ""}`}
                  placeholder="Ej: admin"
                  {...field}
                />
              )}
            />
            {errors.username && <small className="p-error block mt-1 text-red-500">{errors.username.message}</small>}
          </div>

          <div className="text-center mb-4">
            <label htmlFor="password" className="block text-900 font-medium text-sm text-center mb-2">
              Contraseña
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Password
                  id="password"
                  size="large"
                  className={`w-full text-center ${errors.password ? "p-invalid" : ""}`}
                  inputClassName="w-full p-2"
                  feedback={false}
                  toggleMask
                  placeholder="••••••••"
                  {...field}
                />
              )}
            />
            {errors.password && <small className="p-error block mt-1 text-red-500">{errors.password.message}</small>}
          </div>

          {apiError && <small className="p-error block mb-4 text-center text-red-500 font-bold">{apiError}</small>}
            
          
          <Button
            size="medium"
            label={isSubmitting ? "Ingresando..." : "Ingresar"}
            icon={isSubmitting ? "pi pi-spin pi-spinner" : "pi pi-sign-in"}
            className="w-full p-2 font-bold bg-cmr-azul-medio border-1 transition-colors text-white"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
}