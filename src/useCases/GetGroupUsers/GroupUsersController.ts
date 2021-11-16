import { Request, Response } from 'express';
import { GroupUsersUseCase } from "./GroupUsersUseCase";


export class GroupUsersController{
    constructor(
        private groupUsersUseCase: GroupUsersUseCase
    ){}

    async getGroupUsers(request: Request, response: Response): Promise<Response>{
        const user_id  = JSON.stringify(request.query.id_user);

        try{
            const users = await this.groupUsersUseCase.execute({id_user: user_id});
           
            return response.status(201).send({users});

        } catch(err){
            return response.status(400).json({
                error: err.message
            });
        }
    }
}