import { DetailedWod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";

export class DetailedWodExecuter {

    private readonly wodRepository: WodRepository;
    protected _wodId: number | null;

    constructor() {
        this.wodRepository = container.get('repositories.wod');
        this._wodId = null;
    }

    set wodId(id: number) {
        this._wodId = id;
    }

    run(): Promise<DetailedWod | null> {
        if (!this._wodId) {
            return Promise.reject(new Error('wodId is required'));
        }
        return this.wodRepository.getDetailedByID(this._wodId);
    }
}