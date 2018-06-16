"use strict";
const { validationResult } = require('express-validator/check');
const Member = require('../model/Member.js');
const MemberDAO = require('../model/MemberDAO.js');
exports.get_members = (req, res, next) => {
    connect((error, connection) => {
        if (error) {
            next(error);
        }
        else {
            console.log('Connected');
            connection.release();
            res.status(200).json({
                message: 'GET request to /members'
            });
        }
    });
};
exports.create_member = (req, res, next) => {
    //Get validation results generated by the middleware
    const errors = validationResult(req);
    //Check if there are any errors and return them as an array
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var m = new Member(req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.gender, req.body.username, req.body.password, req.body.pin, req.body.rank);
    MemberDAO.addNewMember(m)
        .then(result => {
        res.status(201).json({
            message: 'POST request to /members',
            createdMember: result
        });
    })
        .catch(error => {
        next(error);
    });
    // connect( (error, connection) => {
    //     if( error ){
    //         next(error);
    //     } else {
    //         var m = new Member(
    //             req.body.firstname,
    //             req.body.lastname,
    //             req.body.email,
    //             req.body.phone,
    //             req.body.gender,
    //             req.body.username,
    //             req.body.password,
    //             req.body.pin,
    //             req.body.rank
    //         )
    //         connection.release();
    //         res.status(201).json({
    //             message: 'POST request to /members',
    //             createdMember: m
    //         })   
    //     }
    // });
};
//# sourceMappingURL=members.js.map