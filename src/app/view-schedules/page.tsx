"use client";
import { NextPage } from "next";
import { fetchCustomer, Customer } from "@/app/test/apiTesteClientes";
import { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbClockHour2Filled } from "react-icons/tb";
import { TiScissorsOutline } from "react-icons/ti";
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";
import { SelectProfessional } from "../components/SelectProfessional";

const ViewSchedules: NextPage = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const listProfessionals = ["Luciana", "Fabiana", "Maria", "Lúcia"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCustomer();
                setCustomers(data);
            } catch (error) {
                console.error('Erro ao buscar clientes: ', error);
            }
        };

        fetchData();
    }, []);

    function addProfessional(id: number, professional: string){
        const listWithAddedProfessional = customers.map(customer => {
            if(customer.id === id){
                return {...customer, atendente: professional}
            }
            return customer;
        });
        setCustomers(listWithAddedProfessional);
    }

    const confirmedCustomers = customers.filter(customer => customer.status);
    const cancelCustomers = customers.filter(customer => !customer.status);

    return (
        <main className="flex justify-center bg-color-secundaria overflow-auto py-2 pb-10 relative">
            <section className="flex flex-col items-center w-full text-sm py-4">
                <h1 className="text-color-principal m-1">AGENDADOS</h1>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                    {confirmedCustomers.map(customer => (
                        <div key={customer.id} className="bg-color-principal justify-center w-44 h-fit p-1 rounded-xl text-gray-700 flex flex-col gap-1 border-4 border-green-500">
                            <p className="flex items-center gap-1"><IoPerson />Nome: {customer.nome}</p>
                            <p className="flex items-center gap-1"><MdDateRange />Data: {customer.data}</p>
                            <p className="flex items-center gap-1"><TbClockHour2Filled />Horário: {customer.horario}</p>
                            <p className="flex items-center gap-1"><TiScissorsOutline />Atendende: {customer.atendente}</p>
                            <p className="flex items-center gap-1"><FaRegCircleCheck />Status: {customer.status ? "Agendado" : "Cancelado"}</p>
                            <SelectProfessional id={customer.id} names={listProfessionals} addProfessional={addProfessional}/>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="flex flex-col items-center w-full text-sm py-4">
                <h1 className="text-color-principal m-1">CANCELADOS</h1>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                    {cancelCustomers.map(customer => (
                        <div  key={customer.id} className="bg-color-principal justify-center w-44 h-36 p-1 rounded-xl text-gray-700 flex flex-col gap-1 border-4 border-red-500">
                            <p className="flex items-center gap-1"><IoPerson />Nome: {customer.nome}</p>
                            <p className="flex items-center gap-1"><MdDateRange />Data: {customer.data}</p>
                            <p className="flex items-center gap-1"><TbClockHour2Filled />Horário: {customer.horario}</p>
                            <p className="flex items-center gap-1"><TiScissorsOutline />Atendende: {customer.atendente}</p>
                            <p className="flex items-center gap-1"><VscError />Status: {customer.status ? "Agendado" : "Cancelado"}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ViewSchedules;
