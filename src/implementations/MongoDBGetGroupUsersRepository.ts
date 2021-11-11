import { User } from "../entities/User";
import UserSchema from "../schemas/User";
import { IGroupUsersRepository } from "../repositories/IGroupUsersRepository";


export class MongoDBGetGroupUsersRespository implements IGroupUsersRepository{
    async getGroupUsers(): Promise<User> {
        const users = await UserSchema.find();

        return users;
    }
}