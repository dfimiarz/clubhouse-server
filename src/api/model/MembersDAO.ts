import getConnection from './../../db';
import Member from './Member';
import { Connection as MySQLConnection, MysqlError, FieldInfo } from 'mysql'


let addMemberQuery = function( conn: MySQLConnection ):Promise<any>{

    return new Promise((resolve,reject) => {
        conn.query('SELECT 1 + 1 as sum', (error: MysqlError, result: any,fields: FieldInfo[]) => {
            if( error ){
                reject( error )
            }
            else{

                conn.destroy();
                resolve( result )
            }

           
        })

    })
}

export default class MembersDAO{
    static addNewMember = function(member: Member): any { 
        
        return getConnection()
            .then( connection => {
                return addMemberQuery(connection)
            })
            .then( result => {
                return result;
            })
    }

    static updateMember: () => {

    }


    static removeMember: () => {

    }
}



