import { Router, Request, Response } from "express"
import JWTokenHandler from '../../lib/Auth/JWTokenHandler'
import { body } from "express-validator/check";
import * as membersController from "../controllers/members";

const router: Router = Router();


router.post('/',[
        body('email').isEmail().withMessage('Email missing or malformed'),
        body('pin').isLength({ min: 4, max: 4 }).withMessage('PIN missing or incorrect lenght')
    ], membersController.login_member)


export default router;