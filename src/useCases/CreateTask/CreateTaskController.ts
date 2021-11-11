import {Request, Response } from 'express';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { sign } from 'jsonwebtoken';


export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase,
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const { title, id_responsibles, dispatch, status} = request.body;
        const { id, isAdmin} = request.params;
        
        const token = sign({id, isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        });   

        try{
            await this.createTaskUseCase.execute({
                title,
                holder: id,
                id_responsibles,
                dispatch,
                status
            });

            return response.status(201).send({token});

        } catch (err){
            return response.status(400).json({
                error: err.message
            });
        }
    }
}