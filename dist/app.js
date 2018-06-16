"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const memberRoutes = require('./api/routes/members');
const guestRoutes = require('./api/routes/guests');
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
//Routes for handeling API calls
app.use('/members', memberRoutes);
app.use('/guests', guestRoutes);
app.use((req, res, next) => {
    const error = new Error('Not found');
    // error. = 404;
    next(error);
});
app.use((req, res) => {
    res.status(500);
    res.json({
        error: {
            message: "Test"
        }
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map