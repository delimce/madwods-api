import { ViewEntity, ViewColumn } from "typeorm";
import { Wod } from "@Wod/Domain/Wod";

@ViewEntity("vw_wods")
export class WodViewEntity implements Wod {

    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    type: string;

    @ViewColumn()
    level: string | null;

    @ViewColumn()
    category: string | null;

    @ViewColumn()
    timeCap: string;

}