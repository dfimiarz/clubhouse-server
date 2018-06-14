const getSQLConnection = require('../../db.js');

class Member {
    constructor ( firstname, lastname, email, phone, gender, pin, username, password, rank ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.pin = pin;
        this.phone = phone;
        this.gender = gender;
        this.username = username;
        this.password = password;
        this.rank = rank;
    }

    save() {

        return getSQLConnection().then(
            connection => {
                return Promise.resolve( "Test" )            
            }
        )
        .then( result => {
            return result
        })

    }
}

module.exports = Member;