import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

// entities
import { MovementEntity } from "@Movement/Infrastructure/Persistence/MovementEntity";

export const AppDataSource: DataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        MovementEntity
    ]
});