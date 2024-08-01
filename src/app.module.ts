import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AttendantsModule } from './attendants/attendants.module';
import { SaloonsModule } from './saloons/saloons.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CustomersModule, AppointmentsModule, AttendantsModule, SaloonsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
