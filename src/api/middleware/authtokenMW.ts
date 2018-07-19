import { Request, Response, NextFunction } from "express"

export default function(req: Request, res: Response, next: NextFunction){

    //Check if authorizatio header is set
    if( ! req.headers['authorization'] ){
        next()
    }

    //Get the header content from headers
    const bearerHeader: string = req.headers['authorization'] as string
    
    //extract the token from the header
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1];

    //Pass the token to the next function
    res.locals.token = bearerToken

    next()

}