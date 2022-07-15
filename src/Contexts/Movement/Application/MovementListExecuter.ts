import { Movement } from "@Movement/Domain/Movement";
import { MovementRepository } from "@Movement/Domain/MovementRepository";
import container from "@Api/Containers/MovementContainer";

export class MovementListExecuter {
    
    private readonly movementRepository: MovementRepository;

    
    constructor() {
        this.movementRepository = container.get('repositories.movement');
    }

    run(): Promise<Movement[]> {
        return this.movementRepository.getAll();
    }
}