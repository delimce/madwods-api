import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { databaseConnect, databaseClose } from "@Tests/Utils/database";
import container from "@Api/Containers/WodContainer";


beforeAll(async () => {
    await databaseConnect();
});

afterAll(async () => {
    await databaseClose();
});


describe('Get a Detailed wod ', () => {

    it('should retrieve an error caused by no wodId passed', async () => {
        const executer = await container.get('executers.wod.detail');
        await expect(executer.run()).rejects.toThrowError("wodId is required");
    });

    it('should retrieve a valid detailed wod', async () => {
        const executer = await container.get('executers.wod.detail');
        executer.wodId = 1;
        const wod = await executer.run();
        expect(wod).not.toBeNull();
        expect(wod.wod).toBeInstanceOf(WodViewEntity);
        expect(wod.details.length).toBeGreaterThan(0);

    });

});