import { useRouter } from 'next/router';
import React, { useState } from 'react';


const RegisterSaloon = () => {
    const router = useRouter();
    const [saloonData, setSaloonData] = useState({
        fantasyName: '',
        socialName: '',
        cnpj: '',
        ownerName: '',
        phone: '',
        address: '',
        district: '',
        city: '',
        state: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSaloonData({
            ...saloonData,
            [e.target.name] : e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/payment-form');
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastreo seu Salão</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rouded px-8 pt-6 pb-8 mb-4">
                {['Nome Fantasia', 'Razão Social', 'CNPJ', 'Proprietário', 'Endereço', 'Bairro', 'Cidade', 'Estado'].map((field) => (
                    <div className="mb-4" key={field}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">{field}</label>
                        <input
                            type="text"
                            name={field.toLowerCase().replace('', '')}
                            value={saloonData[field.toLowerCase().replace('', '') as keyof typeof saloonData]}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />    


                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Enviar
                </button>

            </form>
        </div>
    )
}