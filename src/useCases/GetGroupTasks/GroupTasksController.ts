import { Request, Response } from 'express';
import { GroupTasksUseCase } from "./GroupTasksUseCase";


export class GroupTasksController {
    constructor(
        private groupTasksUseCase: GroupTasksUseCase
    ){}

    async getGroupTasks(request: Request, response: Response): Promise<Response>{
        try{
            const tasks = await this.groupTasksUseCase.execute();
            return response.status(201).json({tasks});

        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}