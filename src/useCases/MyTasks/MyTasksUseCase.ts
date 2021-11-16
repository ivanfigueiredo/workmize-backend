import { IMyTasksDTO } from './MyTasksDTO';
import { IMyTasksRepository } from './../../repositories/IMyTasksRepository';



export class MyTasksUseCase {
    constructor(
        private myTasksRepository: IMyTasksRepository
    ){}

    async execute(data: IMyTasksDTO) {
        const tasks = await this.myTasksRepository.myTasks(data.id_holder);


        return tasks;
    }
}