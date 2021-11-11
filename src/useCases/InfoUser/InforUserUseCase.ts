import { IInfoUserRepository } from './../../repositories/IInfoUserRepository';
import { IInfoUserDTO } from './InfoUserDTO';


export class InfoUserUseCase {
    constructor(
        private iInfoUserRepository: IInfoUserRepository
    ){}

    async execute(data: IInfoUserDTO){
        const user = await this.iInfoUserRepository.infoUser(data.id);


        return user;
    }
}