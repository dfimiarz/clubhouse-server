import jwt from 'jsonwebtoken'
import TokenPayload from './TokenPayload'

export default class JWTokenHandler{

    static verifyToken = function( token:string ):Promise<any> {

        return new Promise((resolve,reject) =>
        {
            const options: jwt.VerifyOptions = {
                maxAge: '10 minutes',
                algorithms: ['HS256'],
                issuer: 'testdomain.test'
            }

            const secretKey = process.env.SECRETKEY as string

            jwt.verify(token,secretKey,options,( error, decodedToken ) =>{
                if( error || ! decodedToken){
                    reject(error)
                }
    
                resolve(decodedToken)
            })
    
        })
    
    }

    static signToken = function( payload: TokenPayload):Promise<string> {

        return new Promise((resolve,reject) => {

            const options: jwt.SignOptions = {
                algorithm: 'HS256',
                issuer: 'testdomain.test',
                expiresIn: '10 minutes'
            }

            const secretKey = process.env.SECRETKEY as string

            jwt.sign(payload , secretKey, options,( error, token) => {
            
                if( error || ! token ){
                    reject(error)
                }

                resolve(token);
    
            })

        })
    }

}