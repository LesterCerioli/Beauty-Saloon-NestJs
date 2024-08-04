import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/core/entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from 'src/core/dto/create-address.dto'; // Ajuste o caminho conforme necessário

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }

  async getByStreet(street: string): Promise<Address[]> {
    return this.addressRepository.find({ where: { street } });
  }

  async getByDistrict(district: string): Promise<Address[]> {
    return this.addressRepository.find({ where: { district } });
  }

  async getByState(stateId: number): Promise<Address[]> {
    return this.addressRepository.find({
      where: { stateId } as any,
    });
  }

  async getByCity(cityId: number): Promise<Address[]> {
    return this.addressRepository.find({
      where: { cityId } as any,
    });
  }
}
