import { DatabaseHandler } from "@Shared/Infrastructure/Handlers/DatabaseHandler";
import { DataSourceHandler } from "@Shared/Infrastructure/Handlers/DataSourceHandler";
const timeout = 10000;

// testing database
DataSourceHandler.dataSourceName = "testing";
const db = new DatabaseHandler(DataSourceHandler.getDt());

export const databaseConnect = async () => {
    jest.setTimeout(timeout);
    await db.connect();
};

export const databaseClose = async () => {
    jest.setTimeout(timeout);
    await db.close();
};
