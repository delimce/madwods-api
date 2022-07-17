import { ContainerBuilder } from 'node-dependency-injection'
import { MovementTORepository } from '@Movement/Infrastructure/Persistence/MovementTORepository';

let container = new ContainerBuilder();

//repositories
container.register('repositories.movement', MovementTORepository);

export default container;

