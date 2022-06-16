import { Movement } from "../Domain/Movement";
import { MovementRepository } from "../Domain/MovementRepository";
import container from "../../../Api/Containers/MovementContainer";

export class MovementListExecuter {
    
    private readonly movementRepository: MovementRepository;

    constructor() {
        this.movementRepository = container.get('movement.repository');
    }

    run(): Promise<Movement[]> {
        return this.movementRepository.getAll();
    }
}