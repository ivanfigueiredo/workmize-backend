import { User } from '../entities/User';
import UserSchema from '../schemas/User';
import { IInfoUserRepository } from './../repositories/IInfoUserRepository';



export class MongoDBInfoUserRepository implements IInfoUserRepository{
    async infoUser(id: string): Promise<User>{
        const user = await UserSchema.findOne({id});

        return user;
    }
}