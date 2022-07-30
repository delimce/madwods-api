import { AppDataSource as prod } from "@Shared/Infrastructure/DataSources/production";
import { AppDataSource as testing } from "@Shared/Infrastructure/DataSources/testing";
import { DataSource } from "typeorm";

export type dataSourceObject = {
    name: string,
    dataSource: DataSource;
};

export const dataSources: dataSourceObject[] = [
    { name: "production", dataSource: prod },
    { name: "testing", dataSource: testing }
];