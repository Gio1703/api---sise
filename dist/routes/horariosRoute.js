"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const horariosController_1 = require("../controllers/horariosController");
const router = express_1.default.Router();
router.get('/', horariosController_1.listarHorarios);
router.get('/:id', horariosController_1.obtenerHorario);
router.post('/', horariosController_1.insertarHorario);
router.put('/:id', horariosController_1.modificarHorario);
router.delete('/:id', horariosController_1.eliminarHorario);
exports.default = router;
