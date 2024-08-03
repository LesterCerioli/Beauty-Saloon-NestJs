import { Column } from 'typeorm';

export class UF {
  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;
}
