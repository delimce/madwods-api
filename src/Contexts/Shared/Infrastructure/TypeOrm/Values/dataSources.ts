import { AppDataSource as prod } from "@Shared/Infrastructure/TypeOrm/DataSources/production";
import { AppDataSource as testing } from "@Shared/Infrastructure/TypeOrm/DataSources/testing";
import { DataSource } from "typeorm";

export type dataSourceObject = {
    name: string,
    dataSource: DataSource;
};

export const dataSources: dataSourceObject[] = [
    { name: "production", dataSource: prod },
    { name: "testing", dataSource: testing }
];