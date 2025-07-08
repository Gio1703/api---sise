"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const especialidadesController_1 = require("../controllers/especialidadesController");
const router = express_1.default.Router();
router.get('/', especialidadesController_1.listarEspecialidades);
router.get('/:id', especialidadesController_1.obtenerEspecialidad);
router.post('/', especialidadesController_1.insertarEspecialidad);
router.put('/:id', especialidadesController_1.modificarEspecialidades);
router.delete('/:id', especialidadesController_1.eliminarEspecialidades);
exports.default = router;
