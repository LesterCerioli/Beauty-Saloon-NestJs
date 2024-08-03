// src/core/core.module.ts
import { Module } from '@nestjs/common';
import { AddressModule } from './address.module';
import { CoreService } from './core.service';
import { CoreController } from './core.controller';

@Module({
  imports: [AddressModule], // Certifique-se de importar o módulo correto
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
