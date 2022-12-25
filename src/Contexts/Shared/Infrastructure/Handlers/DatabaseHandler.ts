import { Database } from "@Shared/Domain/Database";
import { DataSource } from "typeorm";

export class DatabaseHandler implements Database {

    constructor(
        private appDataSource: DataSource
    ) { }

    connect(): Promise<DataSource> {
        return this.appDataSource.initialize();
    }
    
    close(): Promise<void> {
        return this.appDataSource.destroy();
    }
}