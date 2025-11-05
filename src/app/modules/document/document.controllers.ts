import { NextFunction, Request, Response } from "express";
import httpStatusCode from 'http-status-codes';
import { asyncHandler } from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { documentServices } from "./document.services";
 



const createDocument = asyncHandler(async(req : Request, res : Response,next : NextFunction)=>{
    const document = await documentServices.createDocumentService(req.body);

    sendResponse(res,{
        statusCode : httpStatusCode.CREATED,
        success : true,
        message : 'Document created',
        data : document
    });
});

const searchDocument = asyncHandler(async(req : Request, res : Response,next : NextFunction)=>{
    const documents = await documentServices.searchDocumentService(req.query as Record<string,string>);

    sendResponse(res,{
        statusCode : httpStatusCode.OK,
        success : true,
        message : 'Documents retrived',
        data : documents
    });
});


export const documentControllers = {
    createDocument,
    searchDocument
}