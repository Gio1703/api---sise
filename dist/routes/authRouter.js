"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../auth/auth.controller");
const router = express_1.default.Router();
router.post('/', auth_controller_1.loginAuth);
exports.default = router;
