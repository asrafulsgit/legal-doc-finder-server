import { NextFunction, Request, Response } from "express";
import { envs } from "../config/env"; 

export const globalErrorHandle = async(err : any , req : Request, res : Response, next : NextFunction)=>{
    let statusCode = 500;
    let message = `Something went wrong!`;
     
    // server error 
    if(err instanceof Error){
        statusCode = 500;
        message = err.message;
    }

    res.status(statusCode).json({
        success : false,
        message,
        err,
        stack : envs.NODE_ENV === 'development' ? err.stack : null
    })
}