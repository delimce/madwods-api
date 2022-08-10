import { ContainerBuilder } from 'node-dependency-injection'
import { WodTORepository } from '@Wod/Infrastructure/Persistence/WodTORepository';
import { WodListExecuter } from '@Wod/Application/WodListExecuter';
import { WodDetailedExecuter } from '@Wod/Application/WodDetailedExecuter';

let container = new ContainerBuilder();

//repositories
container.register('repositories.wod', WodTORepository);

//executers
container.register('executers.wod.list', WodListExecuter);
container.register('executers.wod.detail', WodDetailedExecuter);

export default container;

