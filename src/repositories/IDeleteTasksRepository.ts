

export interface IDeleteTasksRepository {
    delete(id_task: string[], id_holder?: string, id_responsible?: string, isAdmin?: boolean): Promise<void>;
}