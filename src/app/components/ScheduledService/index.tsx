"use client";
import { useEffect, useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import InputMask from "react-input-mask";
import { IoMdSend } from "react-icons/io";

type Servico = {
    nome: string;
    checked: boolean;
};

export const ScheduledService = () => {
    const [nomeCliente, setNomeCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [diaCliente, setDiaCliente] = useState("");
    const [horaCliente, setHoraCliente] = useState("");
    const [servicos, setServicos] = useState<Servico[]>([
        {nome:"Cabelo" , checked: false},
        {nome:"Tintura" , checked: false},
        {nome:"Manicure/Pedicure" , checked: false},
        {nome:"sobrancelha" , checked: false},
        {nome:"Unhas" , checked: false},
        {nome:"Depilação" , checked: false},
        {nome:"Descolorir Pelos" , checked: false},
    ]);
    const [outroServico, setOutroServico] = useState("");
    const [outrosServicos, setOutrosServicos] = useState<{ nome: string; checked: boolean }[]>([]);

    const armazenar = (servico: Servico) => {
        localStorage.setItem(servico.nome, JSON.stringify(servico.checked));
    }


    const handleServicoChange = (index: number) => {
        const novosServicos = [...servicos];
        novosServicos[index].checked = !novosServicos[index].checked;
        setServicos(novosServicos);
    };

    const handleOutroServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutroServico(event.target.value);
    };

    const handleAddOutroServicoClick = () => {
        if (outroServico.trim() !== "" && window.confirm(`Deseja adicionar o serviço "${outroServico}" à lista de serviços?`)) {
            const novoServico = { nome: outroServico, checked: false };
            setOutrosServicos([...outrosServicos, novoServico]);
            setOutroServico("");
        }
    };

    const handleOutroServicoCheckChange = (index: number) => {
        const novosServicos = [...outrosServicos];
        novosServicos[index].checked = !novosServicos[index].checked;
        setOutrosServicos(novosServicos);
    };

    const armazenarSelecionados = () => {
        [...servicos, ...outrosServicos].forEach(servico => {
            if(servico.checked){
                armazenar(servico)
            }
        });
    };

    const handleAgendarClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = document.querySelector("form") as HTMLFormElement;

        if(form.reportValidity()){
            armazenarSelecionados();

            const servicosSelecionados = [...servicos, ...outrosServicos]
            .filter(servico => servico.checked)
            .map(servico => servico.nome)
            .join(", ")
    
            alert(`
            Verifique o atendimento:
            Nome: ${nomeCliente}
            Telefone: ${telefoneCliente}
            Serviços que deseja: ${servicosSelecionados}
            Dia: ${diaCliente}
            Hora: ${horaCliente}    
            `)
            location.reload()
        }
    };

    return (
        <form onSubmit={handleAgendarClick} className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-8 px-4 gap-3 rounded-xl">
            <h1 className="text-color-secundaria text-xl">Marcar Atendimento</h1>
            <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                <label className="w-64">Nome:</label>
                <input
                    value={nomeCliente}
                    onChange={(e) => setNomeCliente(e.target.value)}
                    type="text"
                    className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    placeholder="Insira o nome"
                    required
                />
            </div>

            <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                <label className="w-64">Telefone:</label>
                <InputMask
                    value={telefoneCliente}
                    onChange={(e) => setTelefoneCliente(e.target.value)}
                    mask="(99)99999-9999"
                    className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    placeholder="Insira seu telefone"
                    required
                />
            </div>

            <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                <label className="w-64">Serviço que deseja:</label>
                {servicos.map((servico, index) => (
                    <label key={index} className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={servico.checked}
                            onChange={() => handleServicoChange(index)}
                        />
                        {servico.nome}
                    </label>
                ))}

                {outrosServicos.map((servico, index) => (
                    <label key={index} className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={servico.checked}
                            onChange={() => handleOutroServicoCheckChange(index)}
                        />
                        {servico.nome}
                    </label>
                ))}

                <label className="flex gap-1 items-center">
                    <input
                        type="text"
                        value={outroServico}
                        onChange={handleOutroServicoChange}
                        placeholder="Adicione um outro serviço"
                        className="bg-transparent w-full border-b-color-secundaria border-b-2"
                    />
                    <button
                        type="button"
                        onClick={handleAddOutroServicoClick}
                        className="bg-color-secundaria text-white px-2 py-1 rounded"
                    >
                        <IoMdSend />
                    </button>
                </label>
            </div>

            <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                <label className="w-64">Selecione seu dia:</label>
                <input
                    value={diaCliente}
                    onChange={(e) => setDiaCliente(e.target.value)}
                    type="date"
                    className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    placeholder="Selecione o horário"
                    required
                />
            </div>

            <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                <label className="w-64">Selecione seu horário:</label>
                <input
                    value={horaCliente}
                    onChange={(e) => setHoraCliente(e.target.value)}
                    type="time"
                    className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64"
                    placeholder="Selecione o horário"
                    required
                />
            </div>

            <button
                type="submit"
                className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-color-secundaria text-white"
            >
                Agendar Atendimento <AiFillSchedule />
            </button>
        </form>
    );
};