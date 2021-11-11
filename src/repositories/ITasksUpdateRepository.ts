

export interface ITasksUpdateRepository {
    updateStatus(id_tasks: string[], id?: string, isAdmin?: boolean): Promise<void>;
}