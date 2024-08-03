import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/core/entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from 'src/core/dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    // Cria uma nova entidade Address a partir do DTO
    const address = this.addressRepository.create(createAddressDto);
    
    // Salva a entidade no banco de dados
    return this.addressRepository.save(address);
  }

  async getByAvenueOrStreet(avenueStreet: string): Promise<Address[]> {
    const addresses = await this.addressRepository.find({ where: { avenue_street: avenueStreet } });
    if (addresses.length === 0) {
      throw new NotFoundException(`No addresses found for avenue/street: ${avenueStreet}`);
    }
    return addresses;
  }

  async getByDistrict(district: string): Promise<Address[]> {
    const addresses = await this.addressRepository.find({ where: { district } });
    if (addresses.length === 0) {
      throw new NotFoundException(`No addresses found for district: ${district}`);
    }
    return addresses;
  }

  async getByState(stateId: number): Promise<Address[]> {
    const addresses = await this.addressRepository.find({ where: { state: { id: stateId } } });
    if (addresses.length === 0) {
      throw new NotFoundException(`No addresses found for state with ID: ${stateId}`);
    }
    return addresses;
  }

  async getByCity(cityId: number): Promise<Address[]> {
    const addresses = await this.addressRepository.find({ where: { city: { id: cityId } } });
    if (addresses.length === 0) {
      throw new NotFoundException(`No addresses found for city with ID: ${cityId}`);
    }
    return addresses;
  }
}
