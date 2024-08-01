// src/attendant/dto/create-attendant.dto.ts
import { IsString } from 'class-validator';

export class CreateAttendantDto {
  @IsString()
  attendantName: string;
}

