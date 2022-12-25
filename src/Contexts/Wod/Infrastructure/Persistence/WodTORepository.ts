import { Wod, DetailedWod } from "@Wod/Domain/Wod";
import { WodRepository } from "@Wod/Domain/WodRepository";
import services from "@Api/Services/InfrastructureServices";

import { WodViewEntity } from "@Wod/Infrastructure/Persistence/WodViewEntity";
import { WodContentViewEntity } from "@Wod/Infrastructure/Persistence/WodContentViewEntity";
import { DataSourceHandler } from "@Shared/Infrastructure/Handlers/DataSourceHandler";
import { LoggerHandler } from "@Shared/Infrastructure/Handlers/LoggerHandler";
import { Repository } from "typeorm";

export class WodTORepository implements WodRepository {

    private wodRepository: Repository<WodViewEntity>;
    private wodDetailedRepository: Repository<WodContentViewEntity>;
    private logger: LoggerHandler;

    constructor() {
        this.logger = services.get('services.logger');
        this.wodRepository = DataSourceHandler.getDt().getRepository(WodViewEntity);
        this.wodDetailedRepository = DataSourceHandler.getDt().getRepository(WodContentViewEntity);
    }

    async getAll(): Promise<Wod[] | null> {
        this.logger.info('Getting all Wods');
        return await this.wodRepository.find();
    }

    async getDetailedByID(id: number): Promise<DetailedWod | null> {
        let DetailedWod = null;
        const wod = await this.wodRepository.findOneBy({ id: id });
        if (wod) {
            DetailedWod = {
                wod: wod,
                details: await this.wodDetailedRepository.findBy({ wodId: id })
            };
        }
        return DetailedWod;
    }

}