import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get('customer/:customerName')
  findByCustomerName(@Param('customerName') customerName: string) {
    return this.appointmentsService.findByCustomerName(customerName);
  }

  @Get('date/:appointmentDate')
  findByAppointmentDate(@Param('appointmentDate') appointmentDate: string) {
    return this.appointmentsService.findByAppointmentDate(appointmentDate);
  }

  @Get('hour/:appointmentHour')
  findByAppointmentHour(@Param('appointmentHour') appointmentHour: string) {
    return this.appointmentsService.findByAppointmentHour(appointmentHour);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.appointmentsService.remove(id);
  }
}
