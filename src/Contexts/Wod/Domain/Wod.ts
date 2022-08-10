import {WodContent} from "@Wod/Domain/WodContent";

export interface Wod{
    id: number;
    name: string;
    type: string;
    timeCap: string;
}

export type WodDetailed = {
    wod: Wod;
    details: WodContent[];
}