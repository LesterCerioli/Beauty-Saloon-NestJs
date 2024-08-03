import { Controller, Post, Get, Query, Param, Body, HttpCode, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { AddressService } from './services/addresses/address.service';
import { Address } from 'src/core/entities/address.entity';
import { CreateAddressDto } from 'src/core/dto/create-address.dto';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
    try {
      return await this.addressService.create(createAddressDto);
    } catch (error) {
      // Log the error and throw a 500 Internal Server Error
      console.error(error);
      throw new InternalServerErrorException('Failed to create address');
    }
  }

  @Get('by-avenue-or-street')
  @HttpCode(HttpStatus.OK)
  async getByAvenueOrStreet(@Query('avenueStreet') avenueStreet: string): Promise<Address[]> {
    try {
      const addresses = await this.addressService.getByAvenueOrStreet(avenueStreet);
      if (addresses.length === 0) {
        throw new NotFoundException(`No addresses found for avenue/street: ${avenueStreet}`);
      }
      return addresses;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Rethrow NotFoundException to return a 404 status
      }
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch addresses');
    }
  }

  @Get('by-district')
  @HttpCode(HttpStatus.OK)
  async getByDistrict(@Query('district') district: string): Promise<Address[]> {
    try {
      const addresses = await this.addressService.getByDistrict(district);
      if (addresses.length === 0) {
        throw new NotFoundException(`No addresses found for district: ${district}`);
      }
      return addresses;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Rethrow NotFoundException to return a 404 status
      }
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch addresses');
    }
  }

  @Get('by-state/:stateId')
  @HttpCode(HttpStatus.OK)
  async getByState(@Param('stateId') stateId: number): Promise<Address[]> {
    try {
      const addresses = await this.addressService.getByState(stateId);
      if (addresses.length === 0) {
        throw new NotFoundException(`No addresses found for state with ID: ${stateId}`);
      }
      return addresses;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Rethrow NotFoundException to return a 404 status
      }
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch addresses');
    }
  }

  @Get('by-city/:cityId')
  @HttpCode(HttpStatus.OK)
  async getByCity(@Param('cityId') cityId: number): Promise<Address[]> {
    try {
      const addresses = await this.addressService.getByCity(cityId);
      if (addresses.length === 0) {
        throw new NotFoundException(`No addresses found for city with ID: ${cityId}`);
      }
      return addresses;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Rethrow NotFoundException to return a 404 status
      }
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch addresses');
    }
  }
}
