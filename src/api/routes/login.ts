import { Router, Request, Response } from "express"

const router: Router = Router();



router.post('/', (req, res) => {

    res.status(201).json({
        message: 'Login route'
    })
    
})



export default router;