import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { Attendant } from '../attendants/entities/attendant.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    
    @InjectRepository(Attendant)
    private readonly attendantRepository: Repository<Attendant>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const attendant = await this.attendantRepository.findOne({ where: { id: createAppointmentDto.attendantId } });
    if (!attendant) {
      throw new NotFoundException(`Attendant with ID ${createAppointmentDto.attendantId} not found`);
    }

    const appointment = this.appointmentRepository.create({
      ...createAppointmentDto,
      attendant,
      attendantName: attendant.attendantName,
    });

    return this.appointmentRepository.save(appointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({ relations: ['attendant'] });
  }

  async findByCustomerName(customerName: string): Promise<Appointment[]> {
    return this.appointmentRepository.find({ 
      where: { customerName },
      relations: ['attendant'],
    });
  }

  async findByAppointmentDate(appointmentDate: string): Promise<Appointment[]> {
    return this.appointmentRepository.find({ 
      where: { appointmentDate },
      relations: ['attendant'],
    });
  }

  async findByAppointmentHour(appointmentHour: string): Promise<Appointment[]> {
    return this.appointmentRepository.find({ 
      where: { appointmentHour },
      relations: ['attendant'],
    });
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({ where: { id }, relations: ['attendant'] });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    if (updateAppointmentDto.attendantId) {
      const attendant = await this.attendantRepository.findOne({ where: { id: updateAppointmentDto.attendantId } });
      if (!attendant) {
        throw new NotFoundException(`Attendant with ID ${updateAppointmentDto.attendantId} not found`);
      }
      appointment.attendant = attendant;
      appointment.attendantName = attendant.attendantName;
    }

    Object.assign(appointment, updateAppointmentDto);
    return this.appointmentRepository.save(appointment);
  }

  async remove(id: number): Promise<void> {
    const appointment = await this.appointmentRepository.findOne({ where: { id } });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    await this.appointmentRepository.remove(appointment);
  }
}
