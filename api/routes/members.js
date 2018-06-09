const express = require('express');

const router = express.Router();

const membersController = require ('../controllers/members.js');

const Member = require('../model/Member');

router.get('/', membersController.get_all_members )

router.post('/', (req, res, next) => {

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



    res.status(201).json({
        message: 'POST request to /members',
        createdMember: member
    })

})

router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'GET request to a member',
        id: req.params.id
    })

})

router.patch('/:id', (req, res, next) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'UPDATED request to a member'
    })

})

router.delete('/:id', (req, res, next) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'Delete members to a member'
    })

})



module.exports = router;