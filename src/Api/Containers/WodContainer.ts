import { ContainerBuilder } from 'node-dependency-injection'
import { WodTORepository } from '@Wod/Infrastructure/Persistence/WodTORepository';
import { WodListExecuter } from '@Wod/Application/WodListExecuter';
import { DetailedWodExecuter } from '@Wod/Application/DetailedWodExecuter';

let container = new ContainerBuilder();

//repositories
container.register('repositories.wod', WodTORepository);

//executers
container.register('executers.wod.list', WodListExecuter);
container.register('executers.wod.detail', DetailedWodExecuter);

export default container;

