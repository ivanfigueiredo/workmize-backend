import { IDeleteTasksRepository } from './../../repositories/IDeleteTasksRepository';
import { IDeleteTasksDTO } from './DeleteTasksDTO';



export class DeleteTasksUseCase {
    constructor(
        private iDeleteTasksRepository: IDeleteTasksRepository
    ){}

    async execute(data: IDeleteTasksDTO) {
        if(data.id_holder){
            await this.iDeleteTasksRepository.delete(data.id_tasks, data.id_holder);
        } 

        if(data.id_responsible){
            await this.iDeleteTasksRepository.delete(data.id_tasks, data.id_responsible);
        }

        if(data.isAdmin){
            await this.iDeleteTasksRepository.delete(data.id_tasks, data.isAdmin);
        }
    }
}