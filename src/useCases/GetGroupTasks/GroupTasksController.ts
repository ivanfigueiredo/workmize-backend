import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { GroupTasksUseCase } from "./GroupTasksUseCase";


export class GroupTasksController {
    constructor(
        private groupTasksUseCase: GroupTasksUseCase
    ){}

    async getGroupTasks(request: Request, response: Response): Promise<Response>{
        const {id, isAdmin} = request.body;

        const token = sign({id, isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        });   


        try{
            const tasks = await this.groupTasksUseCase.execute();
            return response.status(201).send({token, tasks});

        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}