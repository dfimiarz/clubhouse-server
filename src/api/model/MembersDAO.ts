import getDBConnection from '../../db';
import NewMember from "./NewMember";
import { Connection as MySQLConnection, MysqlError, FieldInfo } from 'mysql';
import TokenPayload from '../../lib/Auth/TokenPayload';

let addMemberQuery = function( conn: MySQLConnection, newmember: NewMember ):Promise<any>{

    return new Promise((resolve,reject) => {
        //call format `addmember`(club , firstname, lastname, email, phone , gender, rank, pin , role , true);
        let query: string = 'CALL `addmember`(? , ?, ? , ?, ? , ?, ? , ? , ? , true)'
        conn.query(query,
            [1,newmember.firstname,newmember.lastname,newmember.email,newmember.phone,newmember.gender,1,newmember.pin, 1],      
            (error: MysqlError | null, result: any,fields: FieldInfo[] | undefined) => 
        {
            if( error ){
                reject( error )
            }
            else{
                console.dir(result)
                resolve( result[0][0] )
            }
        })

    })
}

let getMembersQuery = function( conn: MySQLConnection ):Promise<any>{

    return new Promise((resolve,reject) => {

        let query: string = 'SELECT * FROM view_member'
        conn.query(query,(error: MysqlError | null, result: any,fields: FieldInfo[] | undefined) => 
        {
            if( error ){
                reject( error )
            }
            else{
                resolve( result )
            }
        })

    })
}

let getUserAccount = function( conn: MySQLConnection, email:string, pin:string ):Promise<TokenPayload>{

    return new Promise((resolve,reject) => {

        let query: string = 'SELECT p.id,p.email,m.role FROM member m join person p on p.id = m.person_id WHERE email = ? and pin = ?'
        conn.query(query,[email, pin], (error: MysqlError | null, result: any,fields: FieldInfo[] | undefined) => 
        {
            if( error ){
                reject( error )
            }
            else{

                if( result.length == 0 ){
                    reject(new Error("Invalid login"))
                }
                else{

                        //ID should be obfuscated
                    const userCredentials = {
                        email: result[0].email,
                        id: result[0].id,
                        roleId: parseInt(result[0].role)
                    }

                    console.log( userCredentials )

                    resolve( userCredentials )

                }
            }
        })
    })
}

export default class MembersDAO {
    static addNewMember = async function(newmember: NewMember) { 
        
        let mysqlconnection: MySQLConnection;
        let result: any;

        mysqlconnection = await getDBConnection();

        result = await addMemberQuery(mysqlconnection,newmember);
            
        mysqlconnection.destroy()
             
        return result; 

    }

    static updateMember: ()  => {

    }


    static removeMember: () => {

    }

    static getMembers = async function() {
        let mysqlconnection: MySQLConnection;
        let result: any;

        mysqlconnection = await getDBConnection();

        result = await getMembersQuery(mysqlconnection);
            
        mysqlconnection.destroy()
             
        return result; 
    }

    static loginMember = async function(email: string, pin: string):Promise<TokenPayload> {
        let mysqlconnection: MySQLConnection;

        mysqlconnection = await getDBConnection();

        let result = await getUserAccount(mysqlconnection,email,pin);
            
        mysqlconnection.destroy()
             
        return result; 
    }
}



