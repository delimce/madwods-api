import { databaseConnect, databaseClose } from "@Tests/Utils/database";
import container from "@Api/Containers/MovementContainer";

beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('movement list', () => {
    it('should retrieve a valid list of movements', async () => {
        const movements = await container.get('executers.movement.list').run();
        if (movements) {
            expect(movements.length).toBeGreaterThan(0);
        }
    });
});