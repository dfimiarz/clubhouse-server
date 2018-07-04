import express from "express";
import logger from './../utils/logger';
import isAppError from './AppError/isAppError';

export default (error: Error ,req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    //Default values for the error message
    let errCode = 500;
    let errMessage = error.message;

    if( isAppError(error)){
        errCode = error.httpErrorCode     
    }
    
    if( process.env.NODE_ENV !== 'production'){
        console.log( error.stack )
    }

    logger.error("Error Code: " + errCode  + ", Messasge: " + error.message);

    res.status(errCode); 
    res.json({
        error: {
            message: errMessage
        }
    })
    
}