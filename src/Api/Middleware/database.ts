import { AppDataSource } from "@Shared/Infrastructure/DataSources/production";
import { DatabaseHandler } from "@Shared/Infrastructure/Handlers/DatabaseHandler";
import services from "@Api/Services/InfrastructureServices";
const logger = services.get("services.logger");

const db = new DatabaseHandler(AppDataSource);

const databaseConnect = () => {
    db.connect().then(() => {
        console.log("Database connected");
        logger.info("Data Source has been initialized!");
    }).catch((err) => {
        console.log(err);
        const msg = `Error trying to connect!`;
        logger.error(msg);
        throw new Error(msg);
    });
};

export default databaseConnect;