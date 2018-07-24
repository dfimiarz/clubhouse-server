import { Request, Response, NextFunction } from "express"
import JWTokenHandler from '../../lib/Auth/JWTokenHandler'

export default function(req: Request, res: Response, next: NextFunction){

    //Check if authorizatio header is set
    if( ! req.headers['authorization'] ){
        next()
    }
    else {
        //Get the header content from headers
        const bearerHeader: string = req.headers['authorization'] as string

        //extract the token from the header
        const bearer = bearerHeader.split(' ')
        if ( bearer.length != 2 ){
            next()
        }
        else{

            JWTokenHandler.verifyToken(bearer[1] as string)
            .then((token) => {
                res.locals.token = token
                next()
            })
            .catch((error) => {
                next()
            })
        }
    }

    

}