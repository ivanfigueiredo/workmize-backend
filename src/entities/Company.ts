import { v4 as uuidv4} from 'uuid';


export class Company{

    public readonly id: string;

    public name: string;

    constructor(props: Omit<Company, 'id'>, id?: string){
        Object.assign(this, props);  

        if(!id){
            this.id = uuidv4();
        }
    }
}