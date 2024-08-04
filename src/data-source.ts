import { DataSource } from 'typeorm';
import { Attendant } from './attendants/entities/attendant.entity';
import { Customer } from './customers/entities/customer.entity';
import { Appointment } from './appointments/entities/appointment.entity';
import * as fs from 'fs-extra';

// Load the JSON configuration file
const config = fs.readJsonSync('./config.json');

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  entities: [Attendant, Customer, Appointment],
  synchronize: false, // It's recommended to set this to false in production
  migrations: ['src/migrations/*.ts'],
  extra: {
    encrypt: true,
  },
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
