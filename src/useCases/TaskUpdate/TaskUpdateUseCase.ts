import { ITaskUpdateDTO } from './TaskUpdateDTO';
import { ITasksUpdateRepository } from './../../repositories/ITasksUpdateRepository';



export class TaskUpdateUseCase {
    constructor(
        private taskUpdateRepository: ITasksUpdateRepository
    ){}

    async execute(data: ITaskUpdateDTO) {
        await this.taskUpdateRepository.updateStatus(
            data.cod_task,
            data.status,
            data.id,
            data.isAdmin
        );
    }
}