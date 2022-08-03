import { Wod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import container from "@Api/Containers/WodContainer";

export class WodListExecuter {

    private readonly movementRepository: WodRepository;


    constructor() {
        this.movementRepository = container.get('repositories.wod');
    }

    run(): Promise<Wod[] | null> {
        return this.movementRepository.getAll();
    }
}