import { User } from "../entities/User";
import UserSchema from "../schemas/User";
import { IGroupUsersRepository } from "../repositories/IGroupUsersRepository";


export class MongoDBGetGroupUsersRespository implements IGroupUsersRepository{
    async getGroupUsers(id_user: string): Promise<[User]> {
        let users: [User] = await UserSchema.find();
        const id = id_user.split('"')[1];

        let newUsers: [User] = [{id:"", name:"", password:"", email:"", isAdmin: false, avatar:""}]

        for(let i in users){
            if(users[i].id !== id){
                newUsers.push(users[i]);
            }
        }
        
        newUsers.splice(0, 1)
        
        return newUsers;
    }
}