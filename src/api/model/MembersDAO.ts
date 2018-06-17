import getDBConnection from './../../db';
import Member from './Member';
import { Connection as MySQLConnection, MysqlError, FieldInfo } from 'mysql'


let addMemberQuery = function( conn: MySQLConnection ):Promise<any>{

    return new Promise((resolve,reject) => {
        conn.query('SELECT 1 + 1 as sum', (error: MysqlError, result: any,fields: FieldInfo[]) => {
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
    static addNewMember = async function(member: Member) { 
        
        let mysqlconnection: MySQLConnection;
        let result: any;

        mysqlconnection = await getDBConnection();

        result = await addMemberQuery(mysqlconnection);
            
        mysqlconnection.destroy()
             
        return result; 

    }

    static updateMember: () => {

    }


    static removeMember: () => {

    }
}



