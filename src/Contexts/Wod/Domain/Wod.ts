import { WodContent } from "@Wod/Domain/WodContent";

export interface Wod {
    id: number;
    name: string;
    type: string;
    timeCap: string;
}

export type DetailedWod = {
    wod: Wod;
    details: WodContent[];
};