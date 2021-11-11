import Task from '../schemas/Task';
import { ITasksUpdateRepository } from './../repositories/ITasksUpdateRepository';



export class MongoDbTasksUpdateRepository implements ITasksUpdateRepository {
    async updateStatus(id_tasks: string[], id: string, isAdmin: boolean): Promise<void>{
        if(id){
            for(let i in id_tasks){
                await Task.findOneAndUpdate({holder: id});
            }
        }

        if(isAdmin){
            for(let i in id_tasks){
                await Task.findOneAndUpdate({id_task: id_tasks[i]})
            }
        }
    }
}