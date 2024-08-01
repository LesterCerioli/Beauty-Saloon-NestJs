import { Module } from '@nestjs/common';
import { SaloonsService } from './saloons.service';
import { SaloonsController } from './saloons.controller';

@Module({
  controllers: [SaloonsController],
  providers: [SaloonsService],
})
export class SaloonsModule {}
