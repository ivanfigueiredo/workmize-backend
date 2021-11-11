import { User } from '../entities/User';

export interface IAuthenticateRepository {
    emailCheck(email: string): Promise<User>;
    passwordCheck(password: string, passwordHash: string): Promise<Boolean>;  
    permissionCheck(isAdmin: boolean, isAdminReq: boolean): Promise<Boolean>;
}