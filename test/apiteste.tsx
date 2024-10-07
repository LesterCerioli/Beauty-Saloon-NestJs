export interface Salao {
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    localizacao: {
        rua: string;
        numero: string;
        cidade: string;
        estado: string;
        bairro: string;
    };
    especializacao: string;
    foto: string;
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"
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
        "foto": "https://images.adsttc.com/media/images/6013/8f05/f91c/8125/1500/02d2/large_jpg/Roby_Salao_Beleza-3774.jpg?1611894525"

    }
  ]
}
    
    export const fetchSaloes = (): Promise<Salao[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(saloesData.salons);
        }, 500)
      })
    }