"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /guests'
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST request to /guests'
    });
});
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
        message: 'UPDATED request to a guests'
    });
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'DEL request for guests'
    });
});
exports.default = router;
//# sourceMappingURL=guests.js.map