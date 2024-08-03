// src/core/services/addresses/address.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/core/entities/address.entity';
import { AddressService } from './services/addresses/address.service';
import { AddressController } from './address.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService], // Se você precisar usar o AddressService em outros módulos
})
export class AddressModule {}
