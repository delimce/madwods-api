import { DataSourceHandler } from '@Shared/Infrastructure/Handlers/DataSourceHandler';
import { databaseConnect, databaseClose } from "@Tests/Utils/database";

beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('data source handler exception DT not found ', () => {
    it('should throw error', async () => {
        DataSourceHandler.dataSourceName = 'DT_NOT_FOUND';
        expect(() => DataSourceHandler.getDt()).toThrowError(`DataSource ${DataSourceHandler.dataSourceName} not found`);
    }
    );
});