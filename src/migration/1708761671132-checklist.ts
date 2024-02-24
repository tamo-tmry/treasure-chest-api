import { MigrationInterface, QueryRunner } from "typeorm";

export class Checklist1708761671132 implements MigrationInterface {
    name = 'Checklist1708761671132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`checklist\` (\`id\` int NOT NULL AUTO_INCREMENT, \`label\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`checklist\``);
    }

}
