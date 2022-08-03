import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { databaseConnect, databaseClose } from "@Tests/Utils/database";

import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('Wod repository', () => {
    it('should retrieve a valid list of Wods', async () => {
        const repository: WodRepository = container.get('repositories.wod');
        const wods = await repository.getAll();
        if (wods) {
            expect(wods.length).toBeGreaterThan(0);
            expect(wods[0]).toBeInstanceOf(WodViewEntity);
        }
    });
});