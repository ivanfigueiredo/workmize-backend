import { Task } from "../entities/Task";


export interface IGroupTasksRepository {
    getGroupTasks(): Promise<Task>;
}