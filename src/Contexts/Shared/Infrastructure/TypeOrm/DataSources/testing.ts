import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { entities } from "@Shared/Infrastructure/TypeOrm/Values/entities";

dotenv.config();

export const AppDataSource: DataSource = new DataSource({
    type: 'sqlite',
    database: String(process.env.DB_TEST_PATH),
    synchronize: false,
    entities: entities,
    subscribers: [],
    migrations: [],
});