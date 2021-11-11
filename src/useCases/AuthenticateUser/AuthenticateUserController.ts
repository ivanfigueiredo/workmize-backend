import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';


export class AuthenticateUserController {
    constructor(
        private authenticateUserUseCase: AuthenticateUserUseCase,
    ){}

    async signin(request: Request, response: Response): Promise<Response> {
        const { email, password, isAdmin} = request.body;     

        try {
            const token = await this
                        .authenticateUserUseCase
                        .execute({            
                            email,
                            password,
                            isAdmin,
                        })
            
            return response.status(201).json({token: token});
        } catch (err){
            return response.status(400).json({
                error: err.message
            })
        }
    }
}