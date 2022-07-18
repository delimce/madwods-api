import { AppDataSource } from "@Shared/Infrastructure/DataSources/production";
import { DatabaseHandler } from "@Shared/Infrastructure/Handlers/DatabaseHandler";
const timeout = 10000;

const db = new DatabaseHandler(AppDataSource);

export const databaseConnect = async () => {
    jest.setTimeout(timeout);
    await db.connect();
};

export const databaseClose = async () => {
    jest.setTimeout(timeout);
    await db.close();
};