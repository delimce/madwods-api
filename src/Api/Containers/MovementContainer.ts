import { ContainerBuilder } from 'node-dependency-injection'
import { MovementTypeRepository } from '../../Contexts/Movement/Infrastructure/Persistence/MovementTypeRepository';

let container = new ContainerBuilder();

//repositories
container.register('movement.repository', MovementTypeRepository);

export default container;

