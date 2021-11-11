import mongoose, { Schema} from 'mongoose';


const TaskSchema = new Schema(
    {
        id_task:{
            type: String,
        },

        title: {
            type: String,
        },

        holder: {
            type: String,
        },

        status: {
            type: String ,         
        },

        responsible: Array,
    
        dispatch: {
            type: Date,
        },
        
        

    }
);

export default mongoose.model('Task', TaskSchema);