import { Movement } from "./Movement";

export interface MovementRepository
{
    getAll(): Promise<Movement[]>;
}