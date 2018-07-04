import express from "express";
import logger from './../utils/logger';
import AppError from './AppError/AppError';
import isAppError from './AppError/isAppError';

export default (error: Error ,req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    let errCode = 500;
    let errMessage = error.message;

    if( isAppError(error)){
        errCode = error.errorCode     
    }
    
    logger.error("Error Code: " + errCode  + ", Messasge: " + error.message);

    res.status(errCode); 
    res.json({
        error: {
            message: errMessage
        }
    })
    
}