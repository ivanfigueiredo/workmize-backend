import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';


export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async signup(request: Request, response: Response): Promise<Response> {
        const { name, email, password, isAdmin } = request.body; 
        const avatar = request.file.filename;  



        try {
            const object = await this.createUserUseCase
                                     .execute({
                                        name,
                                        email,
                                        password,
                                        isAdmin,
                                        avatar
                                    })

            return response.status(201).json({token: object.token, avatar: object.avatar});
        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}