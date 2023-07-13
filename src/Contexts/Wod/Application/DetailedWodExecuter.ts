import { DetailedWod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";

export class DetailedWodExecuter {

    constructor(
        private readonly wodRepository: WodRepository = container.get("repositories.wod"),
        protected _wodId: number | null = null
    ) {

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