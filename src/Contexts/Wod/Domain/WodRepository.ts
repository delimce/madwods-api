import { Wod } from "@Wod/Domain/Wod";

export interface WodRepository
{
    getAll(): Promise<Wod[]|null>;
}