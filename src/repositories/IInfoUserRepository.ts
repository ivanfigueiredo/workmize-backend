import { User } from "../entities/User";

export interface IInfoUserRepository {
    infoUser(id: string): Promise<User>;
}