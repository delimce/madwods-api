import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

// entities
import { MovementEntity } from "@Movement/Infrastructure/Persistence/MovementEntity";

export const AppDataSource: DataSource = new DataSource({
    type: 'sqlite',
    database: "./data/sqlite/madwods.db",
    synchronize: false,
    entities: [MovementEntity],
    logging: true
});