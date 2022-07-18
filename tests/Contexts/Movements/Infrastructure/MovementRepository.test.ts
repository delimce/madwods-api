import { MovementEntity } from "@Movement/Infrastructure/Persistence/MovementEntity";
import { databaseConnect, databaseClose } from "@Tests/Config/database";

import { MovementRepository } from "@Movement/Domain/MovementRepository";
import container from "@Api/Containers/MovementContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('movement repository', () => {
    it('should retrieve a valid list of movements', async () => {
        const repository: MovementRepository = container.get('repositories.movement');
        const movements = await repository.getAll();
        if (movements) {
            expect(movements.length).toBeGreaterThan(0);
            expect(movements[0]).toBeInstanceOf(MovementEntity);
        }
    });
});