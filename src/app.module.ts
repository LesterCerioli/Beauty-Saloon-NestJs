import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AttendantsModule } from './attendants/attendants.module';
import { SaloonsModule } from './saloons/saloons.module';
import { CoreModule } from './core/core.module';
import { Attendant } from './attendants/entities/attendant.entity';
import * as fs from 'fs-extra';

// Carregue o arquivo de configuração JSON
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
      entities: [Attendant],
      synchronize: true,
      options: {
        encrypt: true,
      },
    }),
    CustomersModule,
    AppointmentsModule,
    AttendantsModule,
    SaloonsModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
