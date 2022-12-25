import { Movement } from "@Movement/Domain/Movement";
import { MovementRepository } from "@Movement/Domain/MovementRepository";
import services from "@Api/Services/InfrastructureServices";

import { MovementViewEntity } from "@Movement/Infrastructure/Persistence/MovementViewEntity";
import { DataSourceHandler } from "@Shared/Infrastructure/Handlers/DataSourceHandler";
import { LoggerHandler } from "@Shared/Infrastructure/Handlers/LoggerHandler";
import { Repository } from "typeorm";

export class MovementTORepository implements MovementRepository {

    private movementRepository: Repository<MovementViewEntity>;
    private logger: LoggerHandler;

    constructor() {
        this.logger = services.get('services.logger');
        this.movementRepository = DataSourceHandler.getDt().getRepository(MovementViewEntity);
    }

    async getAll(): Promise<Movement[] | null> {
        this.logger.info('Getting all movements');
        return await this.movementRepository.find();
    }

}