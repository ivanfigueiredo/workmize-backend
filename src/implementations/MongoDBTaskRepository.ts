import { Task } from './../entities/Task';
import { ITaskRepository } from './../repositories/ITaskRepository';
import TaskCreate from '../schemas/Task';




export class MongoDBTaskRepository implements ITaskRepository{

    async save(task: Task): Promise<void> {
        const newtask = new TaskCreate(task);

        newtask.save();
    }
}