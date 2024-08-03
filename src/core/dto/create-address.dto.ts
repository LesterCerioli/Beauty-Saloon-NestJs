// src/core/services/addresses/create-address.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  avenue_street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  complement: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  // Inclua IDs de entidades relacionadas se necessário
  cityId: number;
  stateId: number;
}
