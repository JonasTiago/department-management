import { positionRepository } from '../repositories/position-repository';
import { positionSchema } from '../models/position-model';

interface Position {
  salary: string;
  name: string;
}

async function createPosition({ salary, name }: Position) {
  const { error } = positionSchema.validate(
    { salary, name },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw errors;
  }

  const position = await positionRepository.findPositionByName(name);

  if (position) throw 'position exist!';

  return await positionRepository.insertPosition({ salary, name });
}

async function findPositionById(id: number) {
  const positionSpecific = await positionRepository.findPositionById(id);
  if (!positionSpecific) throw new Error('Product not found!');
  return positionSpecific;
}

async function findPosition() {
  return await positionRepository.findPosition();
}

export const positionService = {
  createPosition,
  findPositionById,
  findPosition
};
