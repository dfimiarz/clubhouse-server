import jwt from 'jsonwebtoken'
import TokenPayload from './TokenPayload'

export default class JWTokenHandler{

    static verifyToken = function( token:string, secretKey: string, options: jwt.VerifyOptions ):Promise<any> {

        return new Promise((resolve,reject) =>
        {
    

            jwt.verify(token,secretKey,options,( error, decodedToken ) =>{
                if( error || ! decodedToken){
                    reject(error)
                }
    
                resolve(decodedToken)
            })
    
        })
    
    }

    static signToken = function( payload: TokenPayload, secretKey: string, options: jwt.SignOptions):Promise<string> {

        return new Promise((resolve,reject) => {
            
            const payloadtestobj = {
                name: 'test'
            }

            jwt.sign(payloadtestobj , secretKey, options,( error, token) => {
            
                if( error || ! token ){
                    reject(error)
                }

                resolve(token);
    
            })

        })
    }

}