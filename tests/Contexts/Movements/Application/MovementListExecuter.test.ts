import { MovementListExecuter } from "@Movement/Application/MovementListExecuter";

describe('movement list', () => {
    it('should retrieve a valid list of movements', async () => {
        const listExecuter = new MovementListExecuter();
        const movements = await listExecuter.run();
        if (movements) {
            expect(movements.length).toBeGreaterThan(0);
        }
    });
});