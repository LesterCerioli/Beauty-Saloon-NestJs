import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsDateString, IsString, Matches } from 'class-validator';
import { Attendant } from 'src/attendants/entities/attendant.entity';

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

  @ManyToOne(() => Attendant, { nullable: false })
  attendant: Attendant;

  @Column({ type: 'varchar', insert: false, update: false })
  @IsString()
  attendantName: string;

  
  getAttendantName(): string {
    return this.attendant ? this.attendant.attendantName : '';
  }
}
