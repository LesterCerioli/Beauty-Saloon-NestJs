// src/customer/customer.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  customerName: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  telephoneNumber: string;
}
