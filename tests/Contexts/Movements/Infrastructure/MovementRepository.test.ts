import { Movement } from "@Movement/Domain/Movement";
import { MovementTypeRepository } from "@Movement/Infrastructure/Persistence/MovementTypeRepository";

describe('movement repository', () => {
    it('should retrieve a valid list of movements', async () => {
        const repository = new MovementTypeRepository();
        const movements = await repository.getAll();
        expect(movements.length).toBeGreaterThan(0);
        expect(movements[0]).toBeInstanceOf(Movement);
    });
});