import { Request, Response } from 'express';
import { TaskUpdateUseCase } from './TaskUpdateUseCase';



export class TaskUpdateController {
    constructor(
        private taskUpdateUseCase: TaskUpdateUseCase
    ){}

    async update(request: Request, response: Response): Promise<Response> {
        const { cod_task, status, id, isAdmin} = request.body;
        try{
            await this.taskUpdateUseCase
                      .execute({
                          cod_task,
                          status,
                          id,
                          isAdmin
                      });

            return response.status(201).send({});

        } catch (err){
            return response.status(201).send({});
        }
    }
}