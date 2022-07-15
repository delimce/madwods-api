import { Movement } from "../../Domain/Movement";
import { MovementRepository } from "../../Domain/MovementRepository";
import services from "../../../../Api/Services/InfrastructureServices";

export class MovementTypeRepository implements MovementRepository
{

    private logger = services.get('services.logger');    

    async getAll(): Promise<Movement[]>
    {
        this.logger.info('Getting all movements');
        const  movements: Movement[] = [];
        movements.push(new Movement(1, "Push-ups", ""));    
        movements.push(new Movement(2, "Pull-ups", ""));    
        movements.push(new Movement(3, "squad-clean", ""));    
        return movements;

    }

}