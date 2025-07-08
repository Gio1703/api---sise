import Joi from 'joi';

export const especialidadCrearSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required()
    .messages({
         'any.required': 'El nombre de la especialidad es obligatorio',
          'string.base': 'El nombre de la especialidad debe ser un texto',
       }),   

})