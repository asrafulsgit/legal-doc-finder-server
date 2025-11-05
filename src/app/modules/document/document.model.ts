import { model, Schema } from "mongoose";
import { IDocument } from "./document.interface";



const documentSchema =new Schema<IDocument>({
    title : {
        type : String,
        required : [true,"Title is required"],
        trim : true
    },
    description : {
        type : String,
        required : [true,"Description is required"],
    },
    category : {
        type : String,
        required : [true,"Category is required"],
        trim : true
    },
    year : {
        type : String,
        required : [true,"Year is required"],
        trim : true
    }
},{timestamps : true, versionKey : false});


export const Document = model<IDocument>("Document",documentSchema);