import { Customer } from "@/models/customer";
import { DataSource } from "typeorm";


const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'), // Conversão para número
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Customer],
    synchronize: true, // Cria a tabela automaticamente se não existir
    logging: false,
})