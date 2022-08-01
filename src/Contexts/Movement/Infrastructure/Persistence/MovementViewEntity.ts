import { ViewEntity, ViewColumn } from "typeorm";
import { MovementView } from "@Movement/Domain/MovementView";

@ViewEntity("vw_movements")
export class MovementViewEntity implements MovementView {

    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    desc: string;

    @ViewColumn()
    type: string;

    @ViewColumn()
    level: string;

    @ViewColumn()
    measures: string;

    @ViewColumn()
    body: string;

}