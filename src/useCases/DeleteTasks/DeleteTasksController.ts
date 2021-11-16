import { Request, Response } from 'express';
import { DeleteTasksUseCase } from './DeleteTasksUseCase';



export class DeleteTasksController {
    constructor(
        private deleteTasksUseCase: DeleteTasksUseCase
    ){}

    async delete(request: Request, response: Response): Promise<Response> {
        const { isAdmin } = request.params;
        const { id_tasks, id_holder, id_responsible } = request.body;

        try{
            await this.deleteTasksUseCase.execute({
                id_tasks,
                id_holder,
                id_responsible,
                isAdmin
            });

            return response.status(201).send({});
        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }

    }
}