import { Wod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import services from "@Api/Services/InfrastructureServices";

import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { DataSourceHandler } from "@Shared/Infrastructure/Handlers/DataSourceHandler";
import { LoggerHandler } from "@Shared/Infrastructure/Handlers/LoggerHandler";
import { Repository } from "typeorm";

export class WodTORepository implements WodRepository {

    private wodRepository: Repository<WodViewEntity>;
    private logger: LoggerHandler;

    constructor() {
        this.logger = services.get('services.logger');
        this.wodRepository = DataSourceHandler.getDt().getRepository(WodViewEntity);
    }

    async getAll(): Promise<Wod[] | null> {
        this.logger.info('Getting all Wods');
        return await this.wodRepository.find();
    }

}