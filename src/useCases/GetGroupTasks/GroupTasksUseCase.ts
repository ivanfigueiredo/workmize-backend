import { IGroupTasksRepository } from './../../repositories/IGroupTasksRepository';



export class GroupTasksUseCase {
    constructor(
        private groupTasksRepository: IGroupTasksRepository
    ){}

    async execute(){
        const tasks = await this.groupTasksRepository.getGroupTasks();

        return tasks;
    }
}