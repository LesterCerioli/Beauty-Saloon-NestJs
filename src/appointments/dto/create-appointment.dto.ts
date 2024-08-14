import { IsDateString, IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty({ description: 'Name of the customer' })
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty({ description: 'Date of the appointment in DD/MM/YYYY format' })
  @IsDateString({ strict: true })
  appointmentDate: string;

  @ApiProperty({ description: 'Time of the appointment in HH:MM format' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Time must be in HH:MM format' })
  appointmentHour: string;

  @ApiProperty({ description: 'ID of the attendant' })
  @IsNotEmpty()
  attendantId: number;
}
