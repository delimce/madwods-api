import { WodContent } from "@Wod/Domain/WodContent";

export interface Wod {
    id: number;
    name: string;
    type: string;
    level: string | null;
    category: string | null;
    timeCap: string;
}

export type DetailedWod = {
    wod: Wod;
    details: WodContent[];
};