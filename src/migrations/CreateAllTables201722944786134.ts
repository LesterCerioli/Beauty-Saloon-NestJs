import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAllTables1722944786134 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create Address Table
    await queryRunner.createTable(new Table({
      name: 'address',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'street',
          type: 'varchar',
        },
        {
          name: 'district',
          type: 'varchar',
        },
      ],
    }));

    // Create City Table
    await queryRunner.createTable(new Table({
      name: 'city',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    }));

    // Create State Table
    await queryRunner.createTable(new Table({
      name: 'state',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    }));

    // Create Saloon Table
    await queryRunner.createTable(new Table({
      name: 'saloons',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'cnpj',
          type: 'varchar',
        },
        {
          name: 'saloonName',
          type: 'varchar',
        },
      ],
    }));

    // Create Customer Table
    await queryRunner.createTable(new Table({
      name: 'customer',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'phone',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
      ],
    }));

    // Create Attendant Table
    await queryRunner.createTable(new Table({
      name: 'attendant',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    }));

    // Create Appointment Table
    await queryRunner.createTable(new Table({
      name: 'appointment',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'clientName',
          type: 'varchar',
        },
        {
          name: 'appointmentDate',
          type: 'date',
        },
        {
          name: 'appointmentTime',
          type: 'time',
        },
        {
          name: 'attendantName',
          type: 'varchar',
        },
        {
          name: 'customerId',
          type: 'int',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop tables if they exist
    await queryRunner.dropTable('appointment');
    await queryRunner.dropTable('attendant');
    await queryRunner.dropTable('customer');
    await queryRunner.dropTable('saloons');
    await queryRunner.dropTable('state');
    await queryRunner.dropTable('city');
    await queryRunner.dropTable('address');
  }
}
