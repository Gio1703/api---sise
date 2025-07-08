"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const responseModel_1 = require("../shared/responseModel");
const jws_1 = require("./jws");
const constant_1 = require("../shared/constant");
const authMiddleware = (req, res, next) => {
    console.log('authMiddleware::authMiddleware');
    const header = req.headers.authorization;
    console.log(`authMiddleware::authMiddleware - Authorization Header: ${header}`);
    if (!header) {
        res.status(constant_1.STATUS_UNAUTHORIZED).json(responseModel_1.ResponseModel.error('Token no proporcionado'));
        return;
    }
    const token = header.split(' ')[1];
    try {
        const decoded = (0, jws_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json(responseModel_1.ResponseModel.error('Token inválido'));
    }
};
exports.authMiddleware = authMiddleware;
