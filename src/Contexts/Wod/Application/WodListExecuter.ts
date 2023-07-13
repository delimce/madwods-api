import { Wod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";

export class WodListExecuter {
    
    constructor(
        private readonly movementRepository: WodRepository = container.get("repositories.wod")
    ) {
    }

    run(): Promise<Wod[] | null> {
        return this.movementRepository.getAll();
    }
}