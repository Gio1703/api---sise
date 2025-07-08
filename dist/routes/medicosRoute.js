"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicosController_1 = require("../controllers/medicosController");
const router = express_1.default.Router();
router.get('/', medicosController_1.listarMedicos);
router.get('/:id', medicosController_1.obtenerMedico);
router.post('/', medicosController_1.insertarMedico);
router.put('/:id', medicosController_1.modificarMedico);
router.delete('/:id', medicosController_1.eliminarMedicos);
exports.default = router;
