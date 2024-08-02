import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Syaye {
    @PrimaryGeneratedColumn()
    id: number;

    state_name: string;

}