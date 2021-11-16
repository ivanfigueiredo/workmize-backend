import { TaskUpdateController } from './TaskUpdateController';
import { TaskUpdateUseCase } from './TaskUpdateUseCase';
import { MongoDbTasksUpdateRepository } from './../../implementations/MongoDBTasksUpdateRepository';



const mongoDBTaskUpdateRepository = new MongoDbTasksUpdateRepository();

const taskUpdateUseCase = new TaskUpdateUseCase(
    mongoDBTaskUpdateRepository
);

const taskUpdateController = new TaskUpdateController(
    taskUpdateUseCase
);

export { taskUpdateUseCase, taskUpdateController}