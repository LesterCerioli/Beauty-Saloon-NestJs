import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { City } from './city.entity';
import { State } from './state.entity';
import { UF } from '../shared/uf';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  avenue_street: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  number: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  complement: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  district: string;

  @ManyToOne(() => City, { nullable: false })
  city: City;

  @ManyToOne(() => State, { nullable: false })
  state: State;

  @ManyToOne(() => UF, { nullable: false })
  uf: UF;
}
