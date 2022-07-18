import { AppDataSource } from "@Shared/Infrastructure/DataSources/production";
const timeout = 10;

export const databaseConnect = async () => {
    jest.setTimeout(timeout);
    await AppDataSource.initialize();
};

export const databaseClose = async () => {
    jest.setTimeout(timeout);
    await AppDataSource.destroy();
};