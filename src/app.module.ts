import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AttendantsModule } from './attendants/attendants.module';
import { SaloonsModule } from './saloons/saloons.module';
import { CoreModule } from './core/core.module';
import { AddressModule } from './core/address.module';
import { Attendant } from './attendants/entities/attendant.entity';
import { Customer } from './customers/entities/customer.entity';
import { Appointment } from './appointments/entities/appointment.entity';
import { Address } from './core/entities/address.entity';
import { City } from './core/entities/city.entity';
import { State } from './core/entities/state.entity';
import * as fs from 'fs-extra';

// Load the JSON configuration file
const config = fs.readJsonSync('./config.json');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      entities: [Attendant, Customer, Appointment, Address, City, State],
      synchronize: true, // Consider setting to false and use migrations for production
      options: {
        encrypt: true // Set to true for Azure SQL
      },
    }),
    CustomersModule,
    AppointmentsModule,
    AttendantsModule,
    SaloonsModule,
    CoreModule,
    AddressModule, // Ensure AddressModule is included
  ],
  controllers: [
    AppController,
    // other controllers...
  ],
  providers: [
    AppService,
    // other services...
  ],
})
export class AppModule {}
