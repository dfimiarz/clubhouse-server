import mysql from "mysql"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export default function(): Promise<mysql.Connection> {
    
    return new Promise((resolve, reject) => {
        
        pool.getConnection((error: mysql.MysqlError,connection: mysql.Connection) => {
            if( error ){
                reject( error )
            }
            else{
                resolve( connection );
            }
        })
    });
}
