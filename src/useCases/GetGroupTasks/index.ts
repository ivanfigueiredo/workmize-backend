import { GroupTasksController } from './GroupTasksController';
import { GroupTasksUseCase } from './GroupTasksUseCase';
import { MoongoDBGetGroupTasksRepository } from './../../implementations/MongoDBGetGroupTasksRepository';


const mongoDBGetGroupTasksRepository =  new MoongoDBGetGroupTasksRepository();

const groupTasksUseCase = new GroupTasksUseCase(
    mongoDBGetGroupTasksRepository
);

const groupTasksController = new GroupTasksController(
    groupTasksUseCase
);

export { groupTasksUseCase, groupTasksController}