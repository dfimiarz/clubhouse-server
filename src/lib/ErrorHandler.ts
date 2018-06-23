import express from "express";
import logger from './../utils/logger';
import AppError from './AppError/AppError';
import isAppError from './AppError/isAppError';

export default (error: Error ,req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    if( isAppError(error)){
        console.log("Got app error");
    }
    else{
        console.log("Not app error");
    }
    
    res.status(500); 
    res.json({
        error: {
            message: error.message
        }
    })
    logger.error("Error 500: Name: " + error.message);
}