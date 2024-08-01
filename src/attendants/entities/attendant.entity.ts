// src/attendant/attendant.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity('attendants')
export class Attendant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  attendantName: string;
}
