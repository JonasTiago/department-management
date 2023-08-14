import Joi from 'joi';

export const positionSchema = Joi.object({
  name: Joi.string().min(3).required(),
  salary: Joi.number().required(),
});

export const productName = Joi.string().min(3).required();
