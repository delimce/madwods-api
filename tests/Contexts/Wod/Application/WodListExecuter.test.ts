import { WodListExecuter } from "@Wod/Application/WodListExecuter";
import { databaseConnect, databaseClose } from "@Tests/Utils/database";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('Wod list', () => {
    it('should retrieve a valid list of Wods', async () => {
        const listExecuter = new WodListExecuter();
        const wods = await listExecuter.run();
        if (wods) {
            expect(wods.length).toBeGreaterThan(0);
        }
    });
});