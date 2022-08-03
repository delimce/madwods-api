import { ContainerBuilder } from 'node-dependency-injection'
import { WodTORepository } from '@Wod/Infrastructure/Persistence/WodTORepository';

let container = new ContainerBuilder();

//repositories
container.register('repositories.wod', WodTORepository);

export default container;

