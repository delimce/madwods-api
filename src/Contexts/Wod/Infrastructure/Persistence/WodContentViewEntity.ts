import { ViewEntity, ViewColumn } from "typeorm";
import { WodContent } from "@Wod/Domain/WodContent";

@ViewEntity("vw_wodcontents")
export class WodContentViewEntity implements WodContent {

    @ViewColumn()
    wodId: number;

    @ViewColumn()
    movement: string;

    @ViewColumn()
    quantity: number;

    @ViewColumn()
    quantity2?: number;

    @ViewColumn()
    quantity3?: number;

    @ViewColumn()
    weight: number;

    @ViewColumn()
    weight2?: number;

    @ViewColumn()
    weight3?: number;

    @ViewColumn()
    measures: string;

    @ViewColumn()
    extra?: string;

}