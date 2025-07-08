"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoDocumentoCrearSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.tipoDocumentoCrearSchema = joi_1.default.object({
    nombre: joi_1.default.string().max(50).required()
        .messages({
        'string.base': 'El nombre debe ser texto.',
        'string.empty': 'El nombre es obligatorio.',
        'string.max': 'El nombre no debe exceder los 50 caracteres.',
        'any.required': 'El nombre es obligatorio.',
    }),
});
