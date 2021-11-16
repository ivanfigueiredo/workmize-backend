import { Task } from "../entities/Task";
import TaskSchema from '../schemas/Task';
import { IGroupTasksRepository } from "../repositories/IGroupTasksRepository";



export class MoongoDBGetGroupTasksRepository implements IGroupTasksRepository {
    async getGroupTasks(): Promise<[Task]> {
        const tasks = await TaskSchema.find();

        return tasks;
    }
}