import 'reflect-metadata'; // Necessário para o TypeORM
import { DataSource } from 'typeorm';
import { Attendant } from './attendants/entities/attendant.entity';
import { Customer } from './customers/entities/customer.entity';
import { Appointment } from './appointments/entities/appointment.entity';
import { Saloon } from './saloons/entities/saloon.entity';
import { Address } from './core/entities/address.entity';
import { City } from './core/entities/city.entity';
import { State } from './core/entities/state.entity';
import * as fs from 'fs-extra';

// Function to load configuration asynchronously
async function loadConfig() {
  try {
    const config = await fs.readJson('./config.json');
    return config;
  } catch (err) {
    console.error('Error reading config file:', err);
    throw err;
  }
}

// Initialize the data source with loaded configuration
export async function initializeDataSource() {
  const config = await loadConfig();

  return new DataSource({
    type: 'mssql',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    entities: [Attendant, Customer, Appointment, Saloon, Address, City, State],
    synchronize: false, // It's recommended to set this to false in production
    migrations: ['src/migrations/*.ts'],
    extra: {
      encrypt: true,
    },
  });
}

// Exporting the initialized data source
export const AppDataSource = initializeDataSource();
