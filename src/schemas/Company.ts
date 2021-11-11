import mongoose, { Schema} from 'mongoose';


const CompanySchema = new Schema(
    {
        name: {
            type: String,
            requerid: true
        }

    }
);

export default mongoose.model('Company', CompanySchema);