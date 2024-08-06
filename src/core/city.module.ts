import { Module } from "@nestjs/common";
import { City } from "./entities/city.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [TypeOrmModule.forFeature([City])],
})
export class CityModule {}

