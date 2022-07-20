import mongoose from "mongoose";
const { Schema } = mongoose

const categorySchema = new Schema({

    name:{
        type : 'string',
        required : true,
    },
    slug:{ 
        type : 'string',
        unique: true,
        lowercase : true,
    }
}, { timestamps:true})  // for create and update operations


export default mongoose.model('Category', categorySchema);