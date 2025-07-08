"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.especialidadCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.especialidadCrearSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(3).max(50).required()
        .messages({
        'any.required': 'El nombre de la especialidad es obligatorio',
        'string.base': 'El nombre de la especialidad debe ser un texto',
    }),
});
