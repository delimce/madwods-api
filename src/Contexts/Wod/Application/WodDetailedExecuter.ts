import { WodDetailed } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";

export class WodDetailedExecuter {

    private readonly wodRepository: WodRepository;
    protected _wodId: number;

    constructor() {
        this.wodRepository = container.get('repositories.wod');
    }

    set wodId(id: number) {
        this._wodId = id;
    }

    run(): Promise<WodDetailed | null> {
        if(!this._wodId) {
            return Promise.reject(new Error('wodId is required'));
        }
        return this.wodRepository.getDetailedByID(this._wodId);
    }
}