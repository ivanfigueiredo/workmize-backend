import Task from '../schemas/Task';
import { IDeleteTasksRepository } from './../repositories/IDeleteTasksRepository';



export class MongoDBDeleteTasksRepository implements IDeleteTasksRepository{
    async delete(id_tasks: string[], id_holder: string, id_responsible?: string, isAdmin?: boolean): Promise<void>{
        if(id_holder){
            for(let i in id_tasks){
                await Task.findOneAndRemove({holder: id_holder});
            }
            return;
        }

        if(id_responsible){
            for(let i in id_tasks){
                await Task.findOneAndRemove({id_responsibles: id_responsible});
            }
            return;
        }

        
        if(isAdmin){
            for(let i in id_tasks){
                await Task.findOneAndRemove({id_task: id_tasks[i]})
            }
        }
        
           
    }
}