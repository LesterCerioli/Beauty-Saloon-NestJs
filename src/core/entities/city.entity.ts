import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  city_name: string;

}