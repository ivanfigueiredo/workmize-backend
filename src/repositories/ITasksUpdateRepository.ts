

export interface ITasksUpdateRepository {
    updateStatus(cod_task: string, status: string, id?: string, isAdmin?: boolean): Promise<void>;
}