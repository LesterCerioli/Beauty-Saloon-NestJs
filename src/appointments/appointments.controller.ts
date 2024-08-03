import { Controller, Get, Post, Body, Param, Patch, Delete, Res, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('/api/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto, @Res() res: Response): Promise<Response> {
    try {
      const appointment = await this.appointmentsService.create(createAppointmentDto);
      return res.status(HttpStatus.CREATED).json(appointment);
    } catch (error) {
      throw new InternalServerErrorException('Error creating appointment');
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    try {
      const appointments = await this.appointmentsService.findAll();
      return res.status(HttpStatus.OK).json(appointments);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching appointments');
    }
  }

  @Get('customer/:customerName')
  async findByCustomerName(@Param('/customerName') customerName: string, @Res() res: Response): Promise<Response> {
    try {
      const appointments = await this.appointmentsService.findByCustomerName(customerName);
      return res.status(HttpStatus.OK).json(appointments);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching appointments by customer name');
    }
  }

  @Get('date/:appointmentDate')
  async findByAppointmentDate(@Param('appointmentDate') appointmentDate: string, @Res() res: Response): Promise<Response> {
    try {
      const appointments = await this.appointmentsService.findByAppointmentDate(appointmentDate);
      return res.status(HttpStatus.OK).json(appointments);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching appointments by appointment date');
    }
  }

  @Get('hour/:appointmentHour')
  async findByAppointmentHour(@Param('appointmentHour') appointmentHour: string, @Res() res: Response): Promise<Response> {
    try {
      const appointments = await this.appointmentsService.findByAppointmentHour(appointmentHour);
      return res.status(HttpStatus.OK).json(appointments);
    } catch (error) {
      throw new InternalServerErrorException('Error fetching appointments by appointment hour');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateAppointmentDto: UpdateAppointmentDto, @Res() res: Response): Promise<Response> {
    try {
      const appointment = await this.appointmentsService.update(id, updateAppointmentDto);
      return res.status(HttpStatus.OK).json(appointment);
    } catch (error) {
      throw new InternalServerErrorException('Error updating appointment');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response): Promise<Response> {
    try {
      await this.appointmentsService.remove(id);
      return res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      throw new InternalServerErrorException('Error deleting appointment');
    }
  }
}
