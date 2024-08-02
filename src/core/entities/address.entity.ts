import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Address {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  avenue_street: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  number: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  complement: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  district: string;

}