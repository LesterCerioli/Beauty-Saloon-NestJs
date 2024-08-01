import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDateString, IsString, Matches } from 'class-validator';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsString()
  customerName: string;

  @Column({ type: 'date' })
  @IsDateString({ strict: true })
  appointmentDate: string;

  @Column({ type: 'time' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Time must be in HH:MM format' })
  appointmentHour: string;

  @Column({ type: 'varchar' })
  @IsString()
  attendantName: string;
}
