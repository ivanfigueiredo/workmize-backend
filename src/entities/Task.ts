import { v4 as uuidv4} from 'uuid';


export class Task{

    public readonly id_task: string;
    
    public title: string;
    public holder: string;
    public id_responsibles: string;
    public dispatch: Date;
    public status: string;

    constructor(props: Omit<Task, 'id_task'>, id_task?: string){
        Object.assign(this, props);  

        if(!id_task){
            this.id_task = uuidv4();
        }
    }
}