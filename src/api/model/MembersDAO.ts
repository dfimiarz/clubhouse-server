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

    static loginMember = async function(username: string, password: string):Promise<TokenPayload> {
        let mysqlconnection: MySQLConnection;
        let result: TokenPayload;

        result = new TokenPayload('jdoe','ABC',1)

        //mysqlconnection = await getDBConnection();

        //result = await getMembersQuery(mysqlconnection);
            
        //mysqlconnection.destroy()
             
        return result; 
    }
}



