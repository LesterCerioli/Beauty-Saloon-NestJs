import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('saloons')
export class Saloon {
  @PrimaryGeneratedColumn()
  id: number; // Define a coluna primária como gerada automaticamente

  @Column({ type: 'varchar', nullable: false })
  cnpj: string;

  @Column({ type: 'varchar', nullable: false })
  saloonName: string;
}
