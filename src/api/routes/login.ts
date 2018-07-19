import { Router, Request, Response } from "express"
import JWTokenHandler from '../../lib/Auth/JWTokenHandler'
import { body } from "express-validator/check";
import * as membersController from "../controllers/members";

const router: Router = Router();


router.post('/',[
        body('username').not().isEmpty().trim(),
        body('password').not().isEmpty().trim()
    ], membersController.login_member)


export default router;