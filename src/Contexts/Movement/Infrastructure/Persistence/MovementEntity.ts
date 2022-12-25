import { Entity, Column } from "typeorm";
import { Movement } from "@Movement/Domain/Movement";
import { BaseEntity } from "@Shared/Infrastructure/TypeOrm/Objects/BaseEntity";

@Entity("tbl_movement")
export class MovementEntity extends BaseEntity implements Movement {

    @Column()
    name: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })
    desc: string;
}