import { IGroupUsersDTO } from './GroupUsersDTO';
import { IGroupUsersRepository } from "../../repositories/IGroupUsersRepository";
import { sign } from 'jsonwebtoken';


export class GroupUsersUseCase {    
    constructor(
        private groupUsersRepository: IGroupUsersRepository
    ){}

    async execute(data: IGroupUsersDTO){
        const users = await this.groupUsersRepository.getGroupUsers(data.id_user);

        return users;
    }
}