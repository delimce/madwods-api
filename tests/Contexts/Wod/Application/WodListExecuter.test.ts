import { databaseConnect, databaseClose } from "@Tests/Utils/database";
import container from "@Api/Containers/WodContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('Wod list', () => {
    it('should retrieve a valid list of Wods', async () => {
        const listExecuter = container.get('executers.wod.list');
        const wods = await listExecuter.run();
        if (wods) {
            expect(wods.length).toBeGreaterThan(0);
        }
    });
});