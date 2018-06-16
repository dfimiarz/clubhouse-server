import express from "express"

const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'GET request to /guests'
    })

})

router.post('/', (req, res, next) => {

    res.status(201).json({
        message: 'POST request to /guests'
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
        message: 'UPDATED request to a guests'
    })

})

router.delete('/:id', (req, res, next) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'DEL request for guests'
    })

})


export default router;