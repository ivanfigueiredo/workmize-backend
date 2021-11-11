import { Request, Response } from 'express';
import { InfoUserUseCase } from './InforUserUseCase';
import { sign } from 'jsonwebtoken';


export class InfoUserController {
    constructor(
        private infoUserUseCase: InfoUserUseCase
    ){}


    async infoUser(request: Request, response: Response): Promise<Response>{
        const { id, isAdmin} = request.params;

        const token = sign({id, isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        });
        
        try{
            const user = await this.infoUserUseCase.execute({id})

            return response.status(201).send({user, token});

        } catch (err){
            return response.status(201).json({
                error: err.message
            })
        }
    }
}