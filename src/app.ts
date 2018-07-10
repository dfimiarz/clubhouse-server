
import express from "express";
import cors from "cors";
import AppError from './lib/AppError/AppError';
import dotenv from "dotenv";

if( process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

//Import route configurations
import guestRouter from './api/routes/guests';
import membersRouter from './api/routes/members';

//import logger from './utils/logger';
import errorhandler from './lib/ErrorHandler';
import AppErrorTypes from "./lib/AppError/AppErrorTypes";



const app = express();

app.set("port", process.env.PORT || 3000 )
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes for handeling API calls
// app.use('/members', memberRoutes);
app.use('/guests', guestRouter);
app.use('/members', membersRouter);

app.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {

    const error = new AppError('Resource not found',AppErrorTypes.ROUTE_ERROR,404);
    next(error);

});

app.use( errorhandler );


export default app;