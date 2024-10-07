export interface Customer {
    id: number;
    nome: string;
    data: string;
    horario: string;
    atendente:string; 
    status: boolean;
  }
   
  const customersData = {
      "customer": [
        {
            id: 1,
            nome: "João Silva",
            data: "2023-07-20",
            horario: "14:00", 
            atendente: "Maria",
            status: false
        },
        {
            id: 2,
            nome: "Ana Costa",
            data: "2023-07-21",
            horario: "10:00",
            atendente: "Carlos",
            status: false
        },
        {
            id: 3,
            nome: "Pedro Martins",
            data: "2023-07-22",
            horario: "11:00",
            atendente: "Fernanda",
            status: false
        },
        {
            id: 4,
            nome: "Luiza Souza",
            data: "2023-07-23",
            horario: "09:00",
            atendente: "Roberto",
            status: false
        },
        {
            id: 5,
            nome: "Marcos Almeida",
            data: "2023-07-24",
            horario: "15:00",
            atendente: "Juliana",
            status: false
        },
        {
            id: 6,
            nome: "Clara Lima",
            data: "2023-07-25",
            horario: "16:00",
            atendente: "Ricardo",
            status: false
        },
        {
            id: 7,
            nome: "Vinicius Rocha",
            data: "2023-07-26",
            horario: "10:30",
            atendente: "Bianca",
            status: false
        },
        {
            id: 8,
            nome: "Gabriela Ferreira",
            data: "2023-07-27",
            horario: "13:00",
            atendente: "",
            status: true
        },
        {
            id: 9,
            nome: "Ricardo Oliveira",
            data: "2023-07-28",
            horario: "11:30",
            atendente: "",
            status: true
        },
        {
            id: 10,
            nome: "Sofia Ribeiro",
            data: "2023-07-29",
            horario: "09:30",
            atendente: "",
            status: true
        },
        {
            id: 11,
            nome: "Beatriz Melo",
            data: "2023-08-01",
            horario: "14:30",
            atendente: "",
            status: true
        },
        {
            id: 12,
            nome: "Felipe Carvalho",
            data: "2023-08-02",
            horario: "10:00",
            atendente: "",
            status: true
        },
        {
            id: 13,
            nome: "Renata Santos",
            data: "2023-08-03",
            horario: "11:00",
            atendente: "",
            status: true
        },
        {
            id: 14,
            nome: "Fernando Gomes",
            data: "2023-08-04",
            horario: "09:00",
            atendente: "",
            status: true
        },
        {
            id: 15,
            nome: "Larissa Almeida",
            data: "2023-08-05",
            horario: "15:00",
            atendente: "",
            status: true
        },
        {
            id: 16,
            nome: "Gustavo Azevedo",
            data: "2023-08-06",
            horario: "16:00",
            atendente: "",
            status: true
        },
        {
            id: 17,
            nome: "Isabela Castro",
            data: "2023-08-07",
            horario: "10:30",
            atendente: "",
            status: true
        },
        {
            id: 18,
            nome: "Thiago Lima",
            data: "2023-08-08",
            horario: "13:00",
            atendente: "",
            status: true
        },
        {
            id: 19,
            nome: "Mariana Correia",
            data: "2023-08-09",
            horario: "11:30",
            atendente: "",
            status: true
        },
        {
            id: 20,
            nome: "Bruno Souza",
            data: "2023-08-10",
            horario: "09:30",
            atendente: "",
            status: true
        },
        {
            id: 21,
            nome: "Camila Ferreira",
            data: "2023-08-11",
            horario: "14:00",
            atendente: "",
            status: true
        },
        {
            id: 22,
            nome: "Leandro Silva",
            data: "2023-08-12",
            horario: "10:00",
            atendente: "",
            status: true
        },
        {
            id: 23,
            nome: "Fernanda Costa",
            data: "2023-08-13",
            horario: "11:00",
            atendente: "",
            status: true
        },
        {
            id: 24,
            nome: "Eduardo Santos",
            data: "2023-08-14",
            horario: "09:00",
            atendente: "Bruna",
            status: false
        },
        {
            id: 25,
            nome: "Tatiana Souza",
            data: "2023-08-15",
            horario: "15:00",
            atendente: "Rafael",
            status: false
        },
        {
            id: 26,
            nome: "Lucas Rocha",
            data: "2023-08-16",
            horario: "16:00",
            atendente: "Fernanda",
            status: false
        },
        {
            id: 27,
            nome: "Patrícia Lima",
            data: "2023-08-17",
            horario: "10:30",
            atendente: "Rodrigo",
            status: false
        },
        {
            id: 28,
            nome: "Rodrigo Oliveira",
            data: "2023-08-18",
            horario: "13:00",
            atendente: "",
            status: true
        },
        {
            id: 29,
            nome: "Adriana Ribeiro",
            data: "2023-08-19",
            horario: "11:30",
            atendente: "Marcelo",
            status: false
        },
        {
            id: 30,
            nome: "Julio Araujo",
            data: "2023-08-20",
            horario: "09:30",
            atendente: "Sofia",
            status: false
        }
      ]
    
    }
    export const fetchCustomer = (): Promise<Customer[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(customersData.customer);
        }, 500)
      })
    }
