import { IAuthenticateRepository } from "../repositories/IAuthenticateRepository";
import UserSchema from '../schemas/User';
import { User } from '../entities/User';
import { compare } from 'bcrypt';


export class MongoDBAuthRepository implements IAuthenticateRepository{
    
    async emailCheck(email: string): Promise<User>{
        const user = await UserSchema.findOne({email});        
        return user;
    }

    async passwordCheck(password: string, passwordHash: string): Promise<boolean>{
        const isValid = await compare(passwordHash, password);        
        return isValid;
    }

    async permissionCheck(isAdmin: boolean, isAdminCheck: boolean): Promise<Boolean>{                     
        if(isAdmin === isAdminCheck){
            return true;
        }

        return false;
    }
}