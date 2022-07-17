import { Movement } from "@Movement/Domain/Movement";
import { MovementRepository } from "@Movement/Domain/MovementRepository";
import services from "@Api/Services/InfrastructureServices";

import { MovementEntity } from "@Movement/Infrastructure/Persistence/MovementEntity";
import { AppDataSource } from "@Shared/Infrastructure/DataSources/production";
import { LoggerHandler } from "@Shared/Infrastructure/Handlers/LoggerHandler";
import { Repository } from "typeorm";

export class MovementTORepository implements MovementRepository {

    private movementRepository: Repository<MovementEntity>;
    private logger: LoggerHandler;

    constructor() {
        this.logger = services.get('services.logger');
        this.movementRepository = AppDataSource.getRepository(MovementEntity);
    }

    async getAll(): Promise<Movement[] | null> {
        this.logger.info('Getting all movements');
        return await this.movementRepository.find();
    }

}