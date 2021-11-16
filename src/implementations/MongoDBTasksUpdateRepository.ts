import Task from '../schemas/Task';
import { ITasksUpdateRepository } from './../repositories/ITasksUpdateRepository';



export class MongoDbTasksUpdateRepository implements ITasksUpdateRepository {
    async updateStatus(cod_task: string, status: string, id: string, isAdmin: boolean): Promise<void>{
        if(id || isAdmin){
            await Task.findOneAndUpdate({id_task: cod_task}, {$set: {status}});
        }
    }
}