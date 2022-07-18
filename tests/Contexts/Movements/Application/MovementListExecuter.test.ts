import { MovementListExecuter } from "@Movement/Application/MovementListExecuter";
import { databaseConnect, databaseClose } from "@Tests/Config/database";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('movement list', () => {
    it('should retrieve a valid list of movements', async () => {
        const listExecuter = new MovementListExecuter();
        const movements = await listExecuter.run();
        if (movements) {
            expect(movements.length).toBeGreaterThan(0);
        }
    });
});