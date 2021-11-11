import { IAuthenticateRepository } from '../../repositories/IAuthenticateRepository';
import { IAuthenticateUserDTO } from './AuthenticateUserDTO';
import { sign } from "jsonwebtoken";


export class AuthenticateUserUseCase {
    constructor(
        private authRepository: IAuthenticateRepository
    ){}
    
    async execute(data: IAuthenticateUserDTO) {
        const userExists = await this.authRepository.emailCheck(data.email);                             
        
        if(!userExists){
            throw new Error('Invalid email, password or permission.');
        }

        const isAdminBoolean = Boolean(data.isAdmin)
        
        
        const passwordCheck = await this.authRepository.passwordCheck(userExists.password, data.password);        
        
        if(!passwordCheck){
            throw new Error('Invalid email, password or permission.');
        }        

        console.log("Passou")
        

        const permissionCheck = await this.authRepository.permissionCheck(userExists.isAdmin, isAdminBoolean);
        
        if(!permissionCheck){
            throw new Error('permission');
        }

        console.log("Passou");
        
        const token = sign({id: userExists.id, isAdmin: userExists.isAdmin}, `${process.env.KEY_AUTHORIZATION}`, {
            expiresIn: "10m"
        });        

        return token;
    }
}