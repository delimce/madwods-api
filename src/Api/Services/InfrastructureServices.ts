import { ContainerBuilder } from 'node-dependency-injection'
import { LoggerHandler } from '@Shared/Infrastructure/Handlers/LoggerHandler'

let container = new ContainerBuilder();

//services
container.register('services.logger', LoggerHandler); //logger

export default container;