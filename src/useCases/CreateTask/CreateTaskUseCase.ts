import { CreateTaskDTO } from './CreateTaskDTO';
import { ITaskRepository } from './../../repositories/ITaskRepository';
import { Task } from '../../entities/Task';
export class CreateTaskUseCase {

    constructor(
        private iTaskRepository: ITaskRepository
    ){}

    async execute(data: CreateTaskDTO) {
        
        const task = new Task({
            title: data.title,
            holder: data.holder,
            id_responsibles: data.id_responsibles,
            dispatch: data.dispatch,
            status: data.status
        });

        await this.iTaskRepository.save(task);
    }
}