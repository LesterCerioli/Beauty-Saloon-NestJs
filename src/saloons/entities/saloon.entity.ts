import { IsString } from "class-validator";
import { Column, Entity } from "typeorm";


@Entity('saloons')
export class Saloon {
  @Column({ type: 'varchar', nullable: false })
  private _cnpj: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  saloonName: string;

  
}
