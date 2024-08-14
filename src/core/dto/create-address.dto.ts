import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  avenue_street: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  // Include other properties as per the Address entity
}
