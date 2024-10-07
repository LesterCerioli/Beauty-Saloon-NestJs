"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMailSharp } from "react-icons/io5";
import Login from './Login';  // Importe o componente Login

type ForgotPasswordFormValues = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormValues>();
  const [showLogin, setShowLogin] = useState(false);  // Estado para controlar a exibição do Login

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = (data) => {
    console.log(data);
    // Simular lógica de recuperação de senha
    // Após o envio, mudar para o componente de Login
    setShowLogin(true);
  };

  // Se o estado "showLogin" for verdadeiro, renderiza o componente Login
  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Recuperar Senha</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Digite seu e-mail para receber instruções sobre como redefinir sua senha.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-gray-700 font-semibold">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="p-3 bg-gray-200">
                <IoMailSharp className="text-gray-500" />
              </span>
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", { required: "Digite seu e-mail!" })}
                className="w-full p-3 outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 w-full"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
