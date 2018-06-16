const getSQLConnection = require('../../db.js');

addMemberQuery = function( connection ){

    var p = new Promise((resolve,reject) => {
        connection.query('SELECT 1 4 1 as sum', (error,result,fields) => {
            if( error ){
                reject(error)
            }
            else{
                resolve(result)
            }
        })

    })

    return p
}

var MemberDAO = {
    addNewMember: () => {       
        return getSQLConnection()
        .then( connection =>{
            return addMemberQuery(connection)
        })
        .then( result => {
            return result
        })
    },
    updateMember: () => {

    },
    removeMember: () => {

    }
}

module.exports = MemberDAO