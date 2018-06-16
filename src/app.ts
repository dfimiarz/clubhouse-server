
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();


const memberRoutes = require('./api/routes/members');
const guestRoutes = require('./api/routes/guests');

const app = express();

app.set("port", process.env.PORT || 3000 )
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes for handeling API calls
app.use('/members', memberRoutes);
app.use('/guests', guestRoutes);

app.use( (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const error = new Error('Not found');
    // error. = 404;
    next(error);
})

app.use( (req, res) => {
    res.status(500);
    res.json({
        error: {
            message: "Test"
        }
    })
})


export default app;