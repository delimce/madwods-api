import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { entities } from "@Shared/Infrastructure/TypeOrm/Values/entities";

dotenv.config();

export const AppDataSource: DataSource = new DataSource({
    type: 'sqlite',
    database: "./data/sqlite/madwods.db",
    synchronize: false,
    entities: entities,
    subscribers: [],
    migrations: [],
});