import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Movement } from "@Movement/Domain/Movement";

@Entity("tbl_movement")
export class MovementEntity implements Movement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;
}