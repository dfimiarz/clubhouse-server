import { Request, Response, NextFunction } from "express"

export default function(req: Request, res: Response, next: NextFunction){
    
    //TODO Make sure that token is an instance of TokenPayload
    const token = res.locals.token

    if(! token ){
        next(Error("User not logged in"))
    }
    else{

        const role = token.roleId

        if ( role == 3 ){
            next()
        }
        else{
            next(Error("Permission denied"))
        }
    }    

}