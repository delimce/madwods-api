import { ContainerBuilder } from 'node-dependency-injection'
import { MovementTORepository } from '@Movement/Infrastructure/Persistence/MovementTORepository';
import { MovementListExecuter } from '@Movement/Application/MovementListExecuter';

let container = new ContainerBuilder();

//repositories
container.register('repositories.movement', MovementTORepository);

//executers
container.register('executers.movement.list', MovementListExecuter);

export default container;

