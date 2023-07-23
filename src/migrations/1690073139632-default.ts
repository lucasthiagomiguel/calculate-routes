import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1690073139632 implements MigrationInterface {
    name = 'Default1690073139632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documents" ALTER COLUMN "id_users" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documents" ALTER COLUMN "id_users" SET NOT NULL`);
    }

}
