import { Cnpj } from "src/core/shared/cnpj";
import { Column, Entity } from "typeorm";


@Entity('saloons')
export class Saloon {


    @Column({ type: 'varchar', nullable: false })
    private _cnpj: string;
}
