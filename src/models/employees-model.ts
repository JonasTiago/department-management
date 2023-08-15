import Joi from 'joi';

export const employeesSchema = Joi.object({
  positionId: Joi.number().required(),
  name: Joi.string().min(3).required(),
});

