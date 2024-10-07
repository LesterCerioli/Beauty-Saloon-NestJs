"use client";
import { NextPage } from "next";
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const WorkerRegistration: NextPage = () =>{
    const [nomeAtendente, setNomeAtendente] = useState("");
    const [emailAtendente, setEmailAtendente] = useState('');
    const [senhaAtendente, setSenhaAtendente] = useState('');

    return (
        <main className="flex justify-center h-screen items-center bg-color-secundaria">
            <form className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-8 gap-3 rounded-xl">
                <h1 className="text-color-secundaria text-xl">Registrar Atendente</h1>
                
                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Nome:</label>
                    <input
                        value={nomeAtendente} 
                        onChange={(e) => setNomeAtendente(e.target.value)}
                        type="text"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o nome"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Email:</label>
                    <input
                        value={emailAtendente} 
                        onChange={(e) => setEmailAtendente(e.target.value)}
                        type="email"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o email"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Senha:</label>
                    <input
                        value={senhaAtendente} 
                        onChange={(e) => setSenhaAtendente(e.target.value)}
                        type="password"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Crie uma senha"
                    /> 
                </div>
                
                <button 
                    type="submit" 
                    className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-color-secundaria text-white"
                >
                    Cadastrar <BsArrowRightCircleFill />
                </button>
            </form>
        </main>
    );
}

export default WorkerRegistration;