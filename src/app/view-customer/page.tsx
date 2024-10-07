"use client";
import { fetchCustomer, Customer } from "@/app/api/customer";
import { NextPage } from "next";
import { useEffect, useState,useRef } from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const ViewCustomer: NextPage = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 10; 
    const topRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCustomer();
                setCustomers(data);
            } catch (error) {
                console.error('Erro ao buscar salões:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber); 
    
    if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <main className="flex flex-row flex-wrap items-center justify-center bg-color-secundaria overflow-auto
         gap-5 pb-16 py-8">
            <div className="flex" ref={topRef}></div>
            {currentCustomers.map((customer, index) => (
                <section key={index} className="flex flex-col justify-center bg-color-principal w-80 h-auto px-3 py-4 gap-10 rounded-xl">
                    <h3 className="text-gray-500">Nome do cliente: {customer.nome}</h3>
                    <p className="text-gray-500">Atendente: {customer.atendente}</p>
                    <div className="flex items-center gap-2 text-md">
                        <div className="border border-transparent px-2 py-2 rounded-xl flex items-center gap-3 bg-color-secundaria text-white">
                            <FaRegCalendarAlt /> {customer.data}
                        </div>
                        <p className="border border-transparent px-2 py-2 rounded-xl flex items-center gap-2.5 bg-color-secundaria text-white">
                            <FaRegClock /> {customer.horario}
                        </p>
                    </div>
                </section>
            ))}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(customers.length / customersPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </main>
    );
};

export default ViewCustomer;