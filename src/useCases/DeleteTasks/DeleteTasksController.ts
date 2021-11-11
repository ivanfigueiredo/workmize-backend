import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { DeleteTasksUseCase } from './DeleteTasksUseCase';



export class DeleteTasksController {
    constructor(
        private deleteTasksUseCase: DeleteTasksUseCase
    ){}

    async delete(request: Request, response: Response): Promise<Response> {
        const { id_tasks, id_responsible } = request.body;
        const {id, isAdmin} = request.params;

        const token = sign({id, isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        });   

        try{
            await this.deleteTasksUseCase.execute({
                id_tasks,
                id_holder: id,
                id_responsible,
                isAdmin
            });

            return response.status(201).send({token});
        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }

    }
}