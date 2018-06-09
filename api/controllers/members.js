
const connect = require('../../db.js');


exports.get_all_members = (req, res, next) => {

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

};