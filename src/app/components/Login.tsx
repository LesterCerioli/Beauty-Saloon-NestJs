"use client";

import React, { useState } from 'react';  // Adicionei useState para gerenciar o estado de troca de tela
import { IoMailSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import ForgotPassword from './ForgotPassword';  // Importe o componente de recuperação de senha

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isForgotPassword, setIsForgotPassword] = useState(false);  // Estado para gerenciar se o usuário está na tela de recuperação

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Adicione a lógica de login aqui
  };

  function handleClickPassword(){
    event?.preventDefault();
  }

  // Se o estado `isForgotPassword` for verdadeiro, renderiza o componente de recuperação de senha
  if (isForgotPassword) {
    return <ForgotPassword />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <h2 className="mb-2 text-2xl font-bold text-left">Seja Bem-vindo!</h2>
          <p className="mb-28 text-xs text-[#50555C]">
            É muito bom que esteja aqui conosco novamente! Por favor, faça login no aplicativo.
          </p>

          <div className='flex flex-col items-center mb-4'>
            <div className='flex w-full'>
              <span className='p-3 border-gray-300 border-y-[1px] border-l-[1px] rounded-l-full'>
                <IoMailSharp />
              </span>
              <input
                id="email"
                type="email"
                placeholder='Email'
                {...register('email', { required: 'Digite seu login!' })}
                className=" w-full py-2 border-x-0 border border-gray-300 outline-none shadow-sm focus:bg-white hover:ring-indigo-500 hover:border-indigo-500"
              />
              <span className='p-3 border-gray-300 border-y-[1px] border-r-[1px] rounded-r-full hover:ring-indigo-500 hover:border-indigo-500'>
                <FaEye className='invisible' />
              </span>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className='flex flex-col items-center mb-4'>
            <div className='flex w-full'>
              <span className='p-3 border-gray-300 border-y-[1px] border-l-[1px] rounded-l-full'>
                <FaUnlockAlt />
              </span>
              <input
                id="password"
                type="password"
                placeholder='Senha'
                {...register('password', { required: 'Digite sua senha!' })}
                className="w-full py-2 border-x-0 border border-gray-300 outline-none shadow-sm focus:bg-white hover:ring-indigo-500 hover:border-indigo-500"
              />
              <button onClick={handleClickPassword} className='p-3 border-gray-300 border-y-[1px] border-r-[1px] rounded-r-full'>
                <FaEye />
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={() => setIsForgotPassword(true)}  // Quando o link é clicado, altera o estado para mostrar a tela de recuperação
              className="text-sm text-indigo-600 hover:text-indigo-900"
            >
              Esqueci minha senha
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="py-2 px-4 bg-btn-primary-color text-white font-semibold rounded-md shadow-md rounded-3xl w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Login
            </button>
          </div>

          <div className="text-center mt-4">
            <Link href="/signup" className="text-sm text-indigo-600 hover:text-indigo-900">Novo usuário? Cadastre-se aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
