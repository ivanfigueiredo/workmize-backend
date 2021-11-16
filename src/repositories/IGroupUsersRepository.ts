import { User } from "../entities/User";


export interface IGroupUsersRepository{
    getGroupUsers(id_user: string): Promise<[User]>;
}