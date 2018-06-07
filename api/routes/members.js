const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'GET request to /members'
    })

})

router.post('/', (req, res, next) => {

    const member = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
        pin: req.body.pin,
        rank: req.body.rank
    }

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