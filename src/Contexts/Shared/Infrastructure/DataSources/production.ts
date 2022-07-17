import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();
import services from "@Api/Services/InfrastructureServices";
const logger = services.get("services.logger");

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


export const databaseConnect = () => {
    AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        logger.info("Data Source has been initialized!");
    })
    .catch((err) => {
        console.log(err);
        const msg = `Error trying to connect!`;
        logger.error(msg);
        throw new Error(msg);
    });
}