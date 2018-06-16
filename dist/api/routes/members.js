"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const membersController = require('../controllers/members.js');
const { body } = require('express-validator/check');
const router = express_1.default.Router();
router.get('/', membersController.get_members);
router.post('/', [
    body('firstname').not().isEmpty().trim(),
    body('lastname').not().isEmpty().trim(),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('phone').not().isEmpty(),
    body('username').not().isEmpty(),
    body('password').isLength({ min: 6 }),
    body('gender').isIn(['M', 'F']).withMessage('Invalid gender'),
    body('rank').isInt({ min: 0, max: 3 }).withMessage('Invalid rank')
], membersController.create_member);
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'GET request to a member',
        id: req.params.id
    });
});
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'UPDATED request to a member'
    });
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Delete members to a member'
    });
});
module.exports = router;
//# sourceMappingURL=members.js.map