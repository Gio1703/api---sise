import Joi from 'joi';

export const medicosCrearSchema = Joi.object({
    nombres: Joi.string().min(3).max(50).required()
    .messages({
        'string.min': 'El nombre debe tener al menos 3 caracteres.',
        'string.max': 'El nombre no puede exceder los 50 caracteres.',
        'any.required': 'El nombre es obligatorio.'
    }),
    apellidos: Joi.string().min(3).max(100).required()
    .messages({
        'string.min': 'El apellido debe tener al menos 3 caracteres.',
        'string.max': 'El apellido no puede exceder los 100 caracteres.',
        'any.required': 'El apellido es obligatorio.'
    }),
    correo: Joi.string().email().required()
    .messages({
        'string.base': 'El correo debe ser un texto.',
        'string.email': 'El correo debe ser un correo electrónico válido.',
        'any.required': 'El correo es obligatorio.'
    }),
    celular: Joi.string().pattern(/^\d{9}$/).required()
    .messages({
        'string.pattern.base': 'El celular debe tener 9 dígitos.',
        'any.required': 'El celular es obligatorio.'
    }),
    id_especialidad: Joi.number().integer().min(1).required()
    .messages({
        'number.base': 'El id de especialidad debe ser un número entero.',
        'number.integer': 'El id de especialidad debe ser un número entero.',
        'number.min': 'El id de especialidad debe ser mayor o igual a 1.',
        'any.required': 'El id de especialidad es obligatorio.'
    })

})