import { Movement } from "@Movement/Domain/Movement";
import { MovementRepository } from "@Movement/Domain/MovementRepository";
import container from "@Api/Containers/MovementContainer";

export class MovementListExecuter {

    constructor(
        private readonly movementRepository: MovementRepository = container.get("repositories.movement")
    ) {
    }

    run(): Promise<Movement[] | null> {
        return this.movementRepository.getAll();
    }
}