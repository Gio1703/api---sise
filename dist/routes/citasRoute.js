"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const citasController_1 = require("../controllers/citasController");
const router = express_1.default.Router();
router.get('/', citasController_1.listarCitas);
router.get('/:id', citasController_1.obtenerCita);
router.post('/', citasController_1.insertarCita);
router.put('/:id', citasController_1.modificarCita);
router.delete('/:id', citasController_1.eliminarCita);
exports.default = router;
