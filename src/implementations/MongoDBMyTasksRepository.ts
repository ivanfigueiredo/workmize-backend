import { Task } from '../entities/Task';
import TaskSchema from '../schemas/Task';
import { IMyTasksRepository } from './../repositories/IMyTasksRepository';


export class MongoDBMyTasksRepository implements IMyTasksRepository{
    async myTasks(id_holder: string): Promise<[Task]> {
        const mytasks = await TaskSchema.find({holder: id_holder});

        return mytasks;
    }
}