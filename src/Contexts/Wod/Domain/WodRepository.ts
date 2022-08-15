import { Wod,DetailedWod } from "@Wod/Domain/Wod";
export interface WodRepository
{
    getAll(): Promise<Wod[]|null>;
    getDetailedByID(id: number): Promise<DetailedWod|null>;
}