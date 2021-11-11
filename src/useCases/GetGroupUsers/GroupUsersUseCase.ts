import { IGroupUsersRepository } from "../../repositories/IGroupUsersRepository";
import { sign } from 'jsonwebtoken';


export class GroupUsersUseCase {    
    constructor(
        private groupUsersRepository: IGroupUsersRepository
    ){}

    async execute(){
        const users = await this.groupUsersRepository.getGroupUsers();

        return users;
    }
}