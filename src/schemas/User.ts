import mongoose, {Schema} from 'mongoose';


const UserSchema = new Schema(
    {   
        
        id: {
            type: String
        },

        name: {
            type: String
        }, 
        
        email: {
            type: String,
            lowercase: true,
            requerid: true,
        },

        password: {
            type: String                            
        },


        isAdmin: {
            type: Boolean
        },

        avatar: {
            type: String            
        }

    }
);


export default mongoose.model('User', UserSchema);