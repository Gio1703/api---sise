"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.horarioCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.horarioCrearSchema = joi_1.default.object({
    id_medico: joi_1.default.number().integer().required()
        .messages({
        'any.required': 'El ID del médico es obligatorio.',
        'number.base': 'El ID del médico debe ser un número entero.',
    }),
    dia_semana: joi_1.default.string().valid('1', '2', '3', '4', '5', '6', '7').required()
        .messages({
        'any.only': 'El día de la semana debe estar entre "1" (lunes) y "7" (domingo).',
        'any.required': 'El día de la semana es obligatorio.',
    }),
    hora_inicio: joi_1.default.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
        .messages({
        'string.pattern.base': 'La hora de inicio debe tener el formato HH:mm.',
        'any.required': 'La hora de inicio es obligatoria.',
    }),
    hora_fin: joi_1.default.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
        .messages({
        'string.pattern.base': 'La hora de fin debe tener el formato HH:mm.',
        'any.required': 'La hora de fin es obligatoria.',
    }),
});
