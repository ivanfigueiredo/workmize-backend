import { User } from "../../entities/User";

export interface CreateTaskDTO {
    
    title: string;
    holder: string;
    id_responsibles: string;
    dispatch: Date;
    status: string;
}