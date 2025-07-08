"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacientesController_1 = require("../controllers/pacientesController");
const router = express_1.default.Router();
router.get('/', pacientesController_1.listarPacientes);
router.get('/:id', pacientesController_1.obtenerPaciente);
router.post('/', pacientesController_1.insertarPaciente);
router.put('/:id', pacientesController_1.modificarPaciente);
router.delete('/:id', pacientesController_1.eliminarPaciente);
exports.default = router;
