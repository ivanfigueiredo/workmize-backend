import { User } from "../entities/User";


export interface IGroupUsersRepository{
    getGroupUsers(): Promise<User>;
}