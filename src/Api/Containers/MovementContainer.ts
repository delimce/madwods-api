import { ContainerBuilder } from 'node-dependency-injection'
import { MovementTypeRepository } from '@Movement/Infrastructure/Persistence/MovementTypeRepository';

let container = new ContainerBuilder();

//repositories
container.register('repositories.movement', MovementTypeRepository);

export default container;

