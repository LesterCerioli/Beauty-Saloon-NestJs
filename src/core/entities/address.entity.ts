import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { State } from './state.entity';
import { City } from './city.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  district: string;

  @ManyToOne(() => City, (city) => city.addresses, { eager: true })
  city: City;

  @ManyToOne(() => State, (state) => state.addresses, { eager: true })
  state: State;
}
