import { MovementEntity } from "@Movement/Infrastructure/Persistence/MovementEntity";
import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { MovementViewEntity } from "@Movement/Infrastructure/Persistence/MovementViewEntity";
import { WodContentViewEntity } from "@Wod/Infrastructure/Persistence/WodContentViewEntity";

export const entities = [
    MovementEntity, MovementViewEntity, WodViewEntity, WodContentViewEntity
];