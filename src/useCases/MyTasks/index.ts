import { MyTasksController } from './MyTasksController';
import { MongoDBMyTasksRepository } from '../../implementations/MongoDBMyTasksRepository';
import { MyTasksUseCase } from './MyTasksUseCase';



const monogoDBMyTasksRepository = new MongoDBMyTasksRepository();
const myTasksUseCase = new MyTasksUseCase(
    monogoDBMyTasksRepository
);

const myTasksController = new MyTasksController(
    myTasksUseCase
);

export { myTasksUseCase, myTasksController }