import { IDocument } from "./document.interface";
import { Document } from "./document.model";


const createDocumentService =async(payload : IDocument)=>{
    const document = await Document.create(payload);
    return document;
}

const searchDocumentService =async(query : Record<string,string>)=>{
    const search = query.search || "";
            
    const searchableFields = ["title","description","category","year"]

            const searchQuery = {
                $or : searchableFields.map(field =>({ [field] : {$regex : search,$options : "i"}}))
            }
     
            const documents = await Document.find(searchQuery);
             
            return documents;
}

export const documentServices = {
    createDocumentService,
    searchDocumentService
}