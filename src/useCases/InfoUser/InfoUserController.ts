import { Request, Response } from 'express';
import { InfoUserUseCase } from './InforUserUseCase';

export class InfoUserController {
    constructor(
        private infoUserUseCase: InfoUserUseCase
    ){}


    async infoUser(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        
        try{
            const user = await this.infoUserUseCase.execute({id})

            return response.status(201).send({user});

        } catch (err){
            return response.status(201).json({
                error: err.message
            })
        }
    }
}