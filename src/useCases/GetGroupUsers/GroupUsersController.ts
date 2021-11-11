import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { GroupUsersUseCase } from "./GroupUsersUseCase";


export class GroupUsersController{
    constructor(
        private groupUsersUseCase: GroupUsersUseCase
    ){}

    async getGroupUsers(request: Request, response: Response): Promise<Response>{
        const {id, isAdmin} = request.body;
        
        const token = sign({id, isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        }); 

        try{
            const users = await this.groupUsersUseCase.execute();
            return response.status(201).send({token, users});

        } catch(err){
            return response.status(400).json({
                error: err.message
            });
        }
    }
}