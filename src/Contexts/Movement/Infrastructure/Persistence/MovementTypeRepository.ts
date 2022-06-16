import { Movement } from "../../Domain/Movement";
import { MovementRepository } from "../../Domain/MovementRepository";

export class MovementTypeRepository implements MovementRepository
{
    async getAll(): Promise<Movement[]>
    {
        const  movements: Movement[] = [];
        movements.push(new Movement(1, "Push-ups", ""));    
        movements.push(new Movement(2, "Pull-ups", ""));    
        movements.push(new Movement(3, "squad-clean", ""));    
        return movements;

    }

}