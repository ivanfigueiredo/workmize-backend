import { IUsersRepository } from "../repositories/IUsersRepository";
import UserSchema from '../schemas/User';
import { User } from '../entities/User';

export class MongoDBUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await UserSchema.findOne({email});
        
        return user;
    }

    async save(user: User): Promise<void> {
        const newuser = new UserSchema(user);        
        newuser.save();
    }
}