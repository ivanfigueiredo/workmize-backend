import {Request, Response } from 'express';
import { CreateTaskUseCase } from './CreateTaskUseCase';

export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase,
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const { title, holder, id_responsibles, dispatch, status} = request.body;

        try{
            await this.createTaskUseCase.execute({
                title,
                holder,
                id_responsibles,
                dispatch,
                status
            });

            return response.status(201).send({});

        } catch (err){
            return response.status(400).json({
                error: err.message
            });
        }
    }
}