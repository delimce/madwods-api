import { MovementViewEntity } from "@Movement/Infrastructure/Persistence/MovementViewEntity";
import { databaseConnect, databaseClose } from "@Tests/Utils/database";
import container from "@Api/Containers/MovementContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('movement repository', () => {
    it('should retrieve a valid list of movements', async () => {
        const movements = await container.get('repositories.movement').getAll();
        if (movements) {
            expect(movements).toBeInstanceOf(Array);
            expect(movements.length).toBeGreaterThan(0);
            expect(movements[0]).toBeInstanceOf(MovementViewEntity);
        }
    });
});