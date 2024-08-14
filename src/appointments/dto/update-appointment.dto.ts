import { IsDateString, IsOptional, IsString, Matches } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAppointmentDto {
  @ApiPropertyOptional({ description: 'Name of the customer' })
  @IsString()
  @IsOptional()
  customerName?: string;

  @ApiPropertyOptional({ description: 'Date of the appointment in DD/MM/YYYY format' })
  @IsDateString({ strict: true })
  @IsOptional()
  appointmentDate?: string;

  @ApiPropertyOptional({ description: 'Time of the appointment in HH:MM format' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Time must be in HH:MM format' })
  @IsOptional()
  appointmentHour?: string;

  @ApiPropertyOptional({ description: 'ID of the attendant' })
  @IsOptional()
  attendantId?: number;
}
