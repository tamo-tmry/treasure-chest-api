import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Checklist } from './checklist/entities/checklist.entity';

config();

const source = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  charset: 'utf8mb4',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Checklist],
  synchronize: false, // TODO: 本番環境では推奨されていないため、環境によって分ける
});

export default source;
