import { Task } from "../entities/Task";


export interface IMyTasksRepository {
    myTasks(id_holder: string): Promise<[Task]>;
}