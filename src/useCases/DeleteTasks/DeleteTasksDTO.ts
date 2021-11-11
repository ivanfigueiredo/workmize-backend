export interface IDeleteTasksDTO {
    id_tasks: string[];
    id_holder?: string,
    id_responsible?: string;
    isAdmin?: string
}