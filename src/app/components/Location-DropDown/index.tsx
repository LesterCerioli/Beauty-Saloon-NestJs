import React, { useState, useEffect } from 'react';

interface HeaderLocationProps {
    estado: string;
    cidade: string;
    bairro: string;
    onEstadoChange: (estado: string) => void;
    onCidadeChange: (cidade: string) => void;
    onBairroChange: (bairro: string) => void;
}

const saloesData = {
"salons": [
    {
        "nomeFantasia": "Salão Beleza Pura",
        "razaoSocial": "Beleza Pura Ltda",
        "cnpj": "12.345.678/0001-99",
        "localizacao": {
            "rua": "Avenida Principal",
            "numero": "123",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "nomeFantasia": "Salão Corte Certo",
        "razaoSocial": "Corte Certo Cabeleireiros ME",
        "cnpj": "98.765.432/0001-88",
        "localizacao": {
            "rua": "Rua das Flores",
            "numero": "456",
            "bairro": "Botafogo",
            "cidade": "Rio de Janeiro",
            "estado": "RJ"
        },
        "especializacao": "Salão Masculino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Glamour",
        "razaoSocial": "Glamour Cabeleireiros Ltda",
        "cnpj": "23.456.789/0001-88",
        "localizacao": {
            "rua": "Rua das Estrelas",
            "numero": "789",
            "bairro": "Moinhos de Vento",
            "cidade": "Porto Alegre",
            "estado": "RS"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Charme",
        "razaoSocial": "Charme & Estilo Eireli",
        "cnpj": "87.654.321/0001-99",
        "localizacao": {
            "rua": "Avenida das Rosas",
            "numero": "321",
            "bairro": "Batel",
            "cidade": "Curitiba",
            "estado": "PR"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Estilo Livre",
        "razaoSocial": "Estilo Livre Cabelos e Estética ME",
        "cnpj": "34.567.890/0001-77",
        "localizacao": {
            "rua": "Praça da Liberdade",
            "numero": "567",
            "bairro": "Savassi",
            "cidade": "Belo Horizonte",
            "estado": "MG"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Elegância",
        "razaoSocial": "Elegância Cabeleireiros EPP",
        "cnpj": "76.543.210/0001-66",
        "localizacao": {
            "rua": "Alameda dos Ipês",
            "numero": "234",
            "bairro": "Lago Sul",
            "cidade": "Brasília",
            "estado": "DF"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Cortes Finos",
        "razaoSocial": "Cortes Finos Cabeleireiros Ltda",
        "cnpj": "45.678.901/0001-55",
        "localizacao": {
            "rua": "Rua das Orquídeas",
            "numero": "890",
            "bairro": "Graça",
            "cidade": "Salvador",
            "estado": "BA"
        },
        "especializacao": "Salão Masculino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Encanto",
        "razaoSocial": "Encanto Cabelos e Beleza Ltda",
        "cnpj": "21.987.654/0001-44",
        "localizacao": {
            "rua": "Travessa das Violetas",
            "numero": "567",
            "bairro": "Aldeota",
            "cidade": "Fortaleza",
            "estado": "CE"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Arte dos Cabelos",
        "razaoSocial": "Arte dos Cabelos Eireli",
        "cnpj": "89.012.345/0001-33",
        "localizacao": {
            "rua": "Avenida das Artes",
            "numero": "432",
            "bairro": "Centro",
            "cidade": "Manaus",
            "estado": "AM"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Estilo Livre",
        "razaoSocial": "Estilo Livre Cabeleireiros Ltda",
        "cnpj": "67.890.123/0001-22",
        "localizacao": {
            "rua": "Rua das Oliveiras",
            "numero": "876",
            "bairro": "Boa Viagem",
            "cidade": "Recife",
            "estado": "PE"
        },
        "especializacao": "Salão Masculino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Top",
        "razaoSocial": "Estilo Livre Cabeleireiros Ltda",
        "cnpj": "67.890.123/0001-22",
        "localizacao": {
            "rua": "Rua das Oliveiras",
            "numero": "1000",
            "bairro": "Boa Viagem",
            "cidade": "Recife",
            "estado": "PE"
        },
        "especializacao": "Salão Masculino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Luxo",
        "razaoSocial": "Luxo Cabeleireiros Ltda",
        "cnpj": "12.345.678/0001-11",
        "localizacao": {
            "rua": "Rua do Comércio",
            "numero": "101",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Moda e Beleza",
        "razaoSocial": "Moda e Beleza ME",
        "cnpj": "98.765.432/0001-22",
        "localizacao": {
            "rua": "Rua das Palmeiras",
            "numero": "202",
            "bairro": "Copacabana",
            "cidade": "Rio de Janeiro",
            "estado": "RJ"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Estética Viva",
        "razaoSocial": "Estética Viva Ltda",
        "cnpj": "23.456.789/0001-33",
        "localizacao": {
            "rua": "Avenida Central",
            "numero": "303",
            "bairro": "Centro",
            "cidade": "Porto Alegre",
            "estado": "RS"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Tendências",
        "razaoSocial": "Tendências e Estilo Eireli",
        "cnpj": "87.654.321/0001-44",
        "localizacao": {
            "rua": "Avenida das Américas",
            "numero": "404",
            "bairro": "Bigorrilho",
            "cidade": "Curitiba",
            "estado": "PR"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Top Hair",
        "razaoSocial": "Top Hair Cabelos e Estética ME",
        "cnpj": "34.567.890/0001-55",
        "localizacao": {
            "rua": "Rua do Sol",
            "numero": "505",
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "estado": "MG"
        },
        "especializacao": "Salão Masculino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Chique",
        "razaoSocial": "Chique Cabeleireiros EPP",
        "cnpj": "76.543.210/0001-66",
        "localizacao": {
            "rua": "Alameda das Azaléias",
            "numero": "606",
            "bairro": "Asa Sul",
            "cidade": "Brasília",
            "estado": "DF"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Fio de Ouro",
        "razaoSocial": "Fio de Ouro Cabeleireiros Ltda",
        "cnpj": "45.678.901/0001-77",
        "localizacao": {
            "rua": "Rua das Violetas",
            "numero": "707",
            "bairro": "Centro",
            "cidade": "Feira de Santana",
            "estado": "BA"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Beleza Rara",
        "razaoSocial": "Beleza Rara Ltda",
        "cnpj": "21.987.654/0001-88",
        "localizacao": {
            "rua": "Travessa das Magnólias",
            "numero": "808",
            "bairro": "Meireles",
            "cidade": "Fortaleza",
            "estado": "CE"
        },
        "especializacao": "Salão Feminino",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    ,
    {
        "nomeFantasia": "Salão Arte & Beleza",
        "razaoSocial": "Arte & Beleza Eireli",
        "cnpj": "89.012.345/0001-99",
        "localizacao": {
            "rua": "Avenida das Palmeiras",
            "numero": "909",
            "bairro": "Flores",
            "cidade": "Manaus",
            "estado": "AM"
        },
        "especializacao": "Salão Unissex",
        "foto": "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }
  ]
}

export const HeaderLocation: React.FC<HeaderLocationProps> = ({ estado, cidade, bairro, onEstadoChange, onCidadeChange, onBairroChange }) => {
    const [cidades, setCidades] = useState<string[]>([]);
    const [bairros, setBairros] = useState<string[]>([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState(estado);
    const [cidadeSelecionada, setCidadeSelecionada] = useState(cidade);
    const [bairroSelecionado, setBairroSelecionado] = useState(bairro);

    useEffect(() => {
        setEstadoSelecionado(estado);
        setCidadeSelecionada(cidade);
        setBairroSelecionado(bairro);
    }, [estado, cidade, bairro]);

    useEffect(() => {
        if (estadoSelecionado) {
            const cidades = Array.from(new Set(saloesData.salons
                .filter(salao => salao.localizacao.estado === estadoSelecionado)
                .map(salao => salao.localizacao.cidade)));
            setCidades(cidades);
            setBairros([]);
        } else {
            setCidades([]);
            setBairros([]);
        }
    }, [estadoSelecionado]);

    useEffect(() => {
        if (cidadeSelecionada) {
            const bairros = Array.from(new Set(saloesData.salons
                .filter(salao => salao.localizacao.cidade === cidadeSelecionada)
                .map(salao => salao.localizacao.bairro)));
            setBairros(bairros);
        } else {
            setBairros([]);
        }
    }, [cidadeSelecionada]);

    const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const estado = e.target.value;
        setEstadoSelecionado(estado);
        setCidadeSelecionada('');
        setBairroSelecionado('');
        onEstadoChange(estado);
    };

    const handleCidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cidade = e.target.value;
        setCidadeSelecionada(cidade);
        setBairroSelecionado('');
        onCidadeChange(cidade);
    };

    const handleBairroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const bairro = e.target.value;
        setBairroSelecionado(bairro);
        onBairroChange(bairro);
    };

    return (
        <div className='flex gap-1 flex-wrap justify-center text-lg text-black xl:gap-3'>
            <select value={estadoSelecionado} onChange={handleEstadoChange} className='rounded-xl py-1 w-44'>
                <option disabled value={''}>Selecione Estado</option>
                {Array.from(new Set(saloesData.salons.map(salao => salao.localizacao.estado))).map((estado, index) => (
                    <option key={index} value={estado}>
                        {estado}
                    </option>
                ))}
            </select>

            <select value={cidadeSelecionada} onChange={handleCidadeChange} className='rounded-xl py-1 w-44'>
                <option disabled value={''}>Selecione Cidade</option>
                {cidades.map((cidade, index) => (
                    <option key={index} value={cidade}>
                        {cidade}
                    </option>
                ))}
            </select>

            <select value={bairroSelecionado} onChange={handleBairroChange} className='rounded-xl py-1 w-44'>
                <option disabled value={''}>Selecione Bairro</option>
                {bairros.map((bairro, index) => (
                    <option key={index} value={bairro}>
                        {bairro}
                    </option>
                ))}
            </select>
        </div>
    );
};