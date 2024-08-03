import { Module } from '@nestjs/common';
import { AddressService } from './services/addresses/address.service';

import { AddressController } from './address.controller';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService], // Se outros módulos também precisarem deste serviço
})
export class AddressModule {}
