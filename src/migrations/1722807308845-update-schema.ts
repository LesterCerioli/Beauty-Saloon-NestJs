import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class UpdateSchema1722807308845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criar a tabela 'appointments'
        await queryRunner.createTable(new Table({
            name: 'appointments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'client_name',
                    type: 'varchar',
                },
                {
                    name: 'appointment_date',
                    type: 'date',
                },
                {
                    name: 'appointment_time',
                    type: 'time',
                },
                {
                    name: 'attendant_name',
                    type: 'varchar',
                },
                {
                    name: 'customer_id',
                    type: 'int',
                },
            ],
        }), true);

        // Adicionar uma coluna 'saloon_id' na tabela 'appointments'
        await queryRunner.addColumn('appointments', new TableColumn({
            name: 'saloon_id',
            type: 'int',
        }));

        // Criar uma chave estrangeira para 'saloon_id'
        await queryRunner.createForeignKey('appointments', new TableForeignKey({
            columnNames: ['saloon_id'],
            referencedTableName: 'saloons',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover a chave estrangeira
        const table = await queryRunner.getTable('appointments');
        const foreignKey = table!.foreignKeys.find(fk => fk.columnNames.indexOf('saloon_id') !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey('appointments', foreignKey);
        }

        // Remover a coluna 'saloon_id'
        await queryRunner.dropColumn('appointments', 'saloon_id');

        // Remover a tabela 'appointments'
        await queryRunner.dropTable('appointments');
    }
}
