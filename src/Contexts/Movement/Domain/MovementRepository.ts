import { Movement } from "@Movement/Domain/Movement";

export interface MovementRepository
{
    getAll(): Promise<Movement[]>;
}