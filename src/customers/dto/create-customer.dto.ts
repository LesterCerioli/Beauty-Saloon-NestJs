import { IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  customerName: string;

  @IsString()
  telephoneNumber: string;
}

