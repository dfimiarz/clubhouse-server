import { Router, Request, Response } from "express"

const router: Router = Router();

router.get('/', (req, res) => {

    res.status(200).json({
        message: 'GET request to /guests'
    })

})

router.post('/', (req, res) => {

    res.status(201).json({
        message: 'POST request to /guests'
    })

})

router.get('/:id', (req, res ) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'GET request to a member',
        id: req.params.id
    })

})

router.patch('/:id', (req, res) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'UPDATED request to a guests'
    })

})

router.delete('/:id', (req, res) => {

    const id = req.params.id;

    res.status(200).json({
        message: 'DEL request for guests'
    })

})


export default router;