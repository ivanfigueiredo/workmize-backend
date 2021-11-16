import { Task } from './../entities/Task';
import { ITaskRepository } from './../repositories/ITaskRepository';
import TaskCreate from '../schemas/Task';




export class MongoDBTaskRepository implements ITaskRepository{

    async save(task: Task): Promise<void> {
        const newtask = new TaskCreate(task);

        console.log("New Task" + newtask)
        console.log("Task" + task)

        newtask.save();
    }
}