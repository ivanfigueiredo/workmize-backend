import { Task } from "../entities/Task";

export interface ITaskRepository {
    save(task: Task): Promise<void>;
}