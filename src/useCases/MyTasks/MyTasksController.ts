import { Request, Response } from 'express';
import { MyTasksUseCase } from './MyTasksUseCase';


export class MyTasksController{
    constructor(
        private myTasksUseCase: MyTasksUseCase
    ){}

    async getMyTasks(request: Request, response: Response): Promise<Response> {
        const id_holder = JSON.stringify(request.query.id_holder);
        const holder_id = id_holder.split('"')[1];

        try{
            const tasks = await this.myTasksUseCase.execute({id_holder: holder_id});
            return response.status(201).json({tasks});
                
        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}