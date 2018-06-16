
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Import route configurations
import guestRouter from './api/routes/guests';

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000 )
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes for handeling API calls
// app.use('/members', memberRoutes);
app.use('/guests', guestRouter);

app.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const error = new Error('Not found');
    next(error);
});

app.use( (error: any,req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500);
    res.json({
        error: {
            message: error.message
        }
    })
});




export default app;