import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { WodContentViewEntity } from "@Wod/Infrastructure/Persistence/WodContentViewEntity";
import { databaseConnect, databaseClose } from "@Tests/Utils/database";
import container from "@Api/Containers/WodContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('Wod repository', () => {
    it('should retrieve a valid list of Wods', async () => {
        const wods = await container.get('repositories.wod').getAll();
        if (wods) {
            expect(wods.length).toBeGreaterThan(0);
            expect(wods[0]).toBeInstanceOf(WodViewEntity);
        }
    });


    it('should retrieve a valid detailed Wod', async () => {
        const detailedWod = await container.get('repositories.wod').getDetailedByID(1);
        if (detailedWod) {
            expect(detailedWod.wod).toBeInstanceOf(WodViewEntity);
            expect(detailedWod.details.length).toBeGreaterThan(0);
            expect(detailedWod.details[0]).toBeInstanceOf(WodContentViewEntity);
        }
    });
});

