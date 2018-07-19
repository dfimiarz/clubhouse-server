import jwt from 'jsonwebtoken'
import TokenPayload from './TokenPayload'

export default class JWTokenHandler{

    static verifyToken = function( token:string, secretKey: string ):Promise<any> {

        return new Promise((resolve,reject) =>
        {
    
            jwt.verify(token,secretKey,( error, decodedToken ) =>{
                if( error || ! decodedToken){
                    reject(error)
                }
    
                resolve(decodedToken)
            })
    
        })
    
    }

    static signToken = function( payload: TokenPayload, secretKey: string, options: jwt.SignOptions):Promise<any> {

        return new Promise((resolve,reject) => {
            
            
            jwt.sign(payload , secretKey, options,( error, token) => {
            
                if( error || ! token ){
                    reject(error)
                }

                resolve(token);
    
            })

        })
    }

}