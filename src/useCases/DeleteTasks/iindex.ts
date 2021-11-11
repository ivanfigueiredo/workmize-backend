import { DeleteTasksController } from './DeleteTasksController';
import { DeleteTasksUseCase } from './DeleteTasksUseCase';
import { MongoDBDeleteTasksRepository } from "../../implementations/MongoDBDeleteTasksRepository";



const mongoDBDeleteTasksRepository = new MongoDBDeleteTasksRepository();

const deleteTasksUseCase = new DeleteTasksUseCase(
    mongoDBDeleteTasksRepository
);

const deleteTasksController = new DeleteTasksController(
    deleteTasksUseCase
);

export {deleteTasksUseCase, deleteTasksController}