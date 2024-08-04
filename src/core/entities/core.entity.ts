import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Core {
 

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
}
