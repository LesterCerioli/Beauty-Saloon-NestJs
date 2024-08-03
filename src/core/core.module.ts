import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';
import { AddressController } from './address.controller'; // Corrigido

@Module({
  controllers: [AddressController, CoreController], // Corrigido
  providers: [CoreService],
})
export class CoreModule {}
