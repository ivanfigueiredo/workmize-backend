import { CreateTaskController } from './CreateTaskController';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { MongoDBTaskRepository } from './../../implementations/MongoDBTaskRepository';


const mongoDBTaskRepository = new MongoDBTaskRepository();

const createTaskUseCase = new CreateTaskUseCase(
    mongoDBTaskRepository,
);

const createTaskController = new CreateTaskController(
    createTaskUseCase
);

export { createTaskUseCase, createTaskController}