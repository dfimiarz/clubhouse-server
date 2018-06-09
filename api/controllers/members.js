
const connect = require('../../db.js');


exports.get_members = (req, res, next) => {

    connect( (error, connection) => {
        if( error ){
            next(error);
        } else {
            console.log('Connected');
            
            connection.release();
            
            res.status(200).json({
                message: 'GET request to /members'
            })           
        }
    });

}

exports.create_member = (req, res, next) => {

    connect( (error, connection) => {
        if( error ){
            next(error);
        } else {
            var m = new Member(
                req.body.firstname,
                req.body.lastname,
                req.body.email,
                req.body.phone,
                req.body.gender,
                req.body.username,
                req.body.password,
                req.body.pin,
                req.body.rank
            )

            connection.release();

            res.status(201).json({
                message: 'POST request to /members',
                createdMember: member
            })   
                 
        }
    });

}

