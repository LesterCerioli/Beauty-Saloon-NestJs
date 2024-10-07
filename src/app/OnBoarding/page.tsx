"use client";
import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { NextPage } from "next";
import axios from "axios"

const OnBoarding: NextPage = () => {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tipoAtendimento, setTipoAtendimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [localizacaoBairro, setLocalizacaoBairro] = useState("");
    const [localizacaoRua, setLocalizacaoRua] = useState("");
    const [localizacaoNumero, setLocalizacaoNumero] = useState("");
    const [localizacaoCidade, setLocalizacaoCidade] = useState("");
    const [localizacaoEstado, setLocalizacaoEstado] = useState("");
    const [localizacaoComplemento, setLocalizacaoComplemento] = useState("");
    const [imagem, setImagem] = useState<File | null>(null);

    const [estados, setEstados] = useState<any[]>([]);
    const [cidades, setCidades] = useState<any[]>([]);

    const handleImagemChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files ? event?.target.files[0] : null;
        setImagem(file);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (imagem) {
          console.log(imagem);
        } else {
          console.log('Nenhuma imagem selecionada.');
        }
      }
    
    useEffect(() => {
        async function fetchEstados() {
            try {
                const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                setEstados(response.data);
            } catch (error) {
                console.error("Erro ao buscar estados:", error);
            }
        }
        fetchEstados();
    }, []);

    useEffect(() => {
        async function fetchCidades(estado: string) {
            if (!estado) return;
            try {
                const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
                setCidades(response.data);
            } catch (error) {
                console.error("Erro ao buscar cidades:", error);
            }
        }
        fetchCidades(localizacaoEstado);
    }, [localizacaoEstado]);

    return (
        <main className="flex justify-center items-center bg-color-secundaria overflow-auto pb-10">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-4 gap-3 rounded-xl m-10">
                <h1 className="text-color-secundaria text-xl">Cadastrar Empresa</h1>     
                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Nome fantasia da empresa:</label>
                    <input 
                        type="text" 
                        placeholder="Insira o nome fantasia" 
                        value={nomeFantasia} 
                        onChange={(e) => setNomeFantasia(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />
                </div>
                
                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Razão social da empresa:</label>
                    <input 
                        type="text" 
                        placeholder="Insira a razão social" 
                        value={razaoSocial} 
                        onChange={(e) => setRazaoSocial(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">CNPJ da empresa:</label>
                    <InputMask 
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                        mask="99.999.999/9999-99" 
                        placeholder="Insira o CNPJ"
                        value={cnpj} 
                        onChange={(e) => setCnpj(e.target.value)}
                        required
                    >
                    </InputMask>
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Endereço do salão:</label>

                    <div className="flex items-center gap-1">
                    <input 
                        type="text" 
                        placeholder="Insira a Avenida/Estrada/Rua" 
                        value={localizacaoRua} 
                        onChange={(e) => setLocalizacaoRua(e.target.value)}
                        className="w-44 px-2 py-1 rounded-xl transition-all duration-500 focus:w-52"
                    />

                    <span>-</span>
                    <input 
                        type="text" 
                        placeholder="N.º" 
                        value={localizacaoNumero} 
                        onChange={(e) => setLocalizacaoNumero(e.target.value)}
                        className="w-12 px-2 py-1 rounded-xl transition-all duration-500 focus:w-20"
                    />
                    </div>

                    <input 
                        type="text" 
                        placeholder="Insira o complemento" 
                        value={localizacaoComplemento} 
                        onChange={(e) => setLocalizacaoComplemento(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />
                
                    <input 
                        type="text" 
                        placeholder="Insira o bairro" 
                        value={localizacaoBairro} 
                        onChange={(e) => setLocalizacaoBairro(e.target.value)}
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    />

                    <div className="flex items-center gap-1">
                    <select 
                        value={localizacaoEstado} 
                        onChange={(e) => setLocalizacaoEstado(e.target.value)} 
                        className="w-12 py-1 rounded-xl transition-all duration-500 focus:w-14 text-gray-400"
                    >
                        <option value="">UF</option>
                        {estados.map((estado: any) => (
                            <option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>
                        ))}
                    </select>
                    <span>-</span>
                    <select 
                        value={localizacaoCidade} 
                        onChange={(e) => setLocalizacaoCidade(e.target.value)} 
                        className="w-44 py-1 rounded-xl transition-all duration-500 focus:w-52 text-gray-400"
                    >
                        <option value="">Selecione a cidade</option>
                        {cidades.map((cidade: any) => (
                            <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
                        ))}
                    </select>
                    </div>
                </div>

                <div className="flex flex-col mb-2 gap-1">
                    <label className="w-64 text-color-secundaria">Especialização do salão:</label>
                    <select 
                        value={tipoAtendimento} 
                        onChange={(e) => setTipoAtendimento(e.target.value)} 
                        className="w-60 py-1 rounded-xl transition-all duration-500 focus:w-64 text-gray-400"
                    >
                        <option value="">Selecione...</option>
                        <option className="w-full">Salão Masculino</option>
                        <option className="w-full">Salão Feminino</option>
                        <option className="w-full">Salão Unissex</option>
                    </select>
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Imagem do Salão:</label>
                    <div className="flex flex-col">
                        <input
                            onChange={handleImagemChange}
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            id="fileInput"
                        />
                        <label 
                            htmlFor="fileInput"
                            className="w-60 px-2 py-1 rounded-xl transition-all duration-500 border-color-secundaria border-2 text-gray-700 cursor-pointer text-center"
                        >
                            Escolha uma imagem
                        </label>
                        {imagem && (
                            <span className="mt-2 text-gray-600 text-sm">{imagem.name}</span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Email:</label>
                    <input
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o email"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Senha:</label>
                    <input
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)}
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

export default OnBoarding;
