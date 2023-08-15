import { positionRepository } from '../repositories/position-repository';
import { positionSchema } from '../models/position-model';

interface Position {
  salary: number;
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
  if (!positionSpecific) throw 'Position not found!';
  return positionSpecific;
}

async function findSumPositionById(id: number) {
  const position = await positionRepository.findPositionById(id);
  if (!position) throw 'Position not found!';
  const sumPosition = await positionRepository.findSumPositionById(id);
  return sumPosition;
}

async function findPosition() {
  return await positionRepository.findPosition();
}

export const positionService = {
  createPosition,
  findPositionById,
  findPosition,
  findSumPositionById,
};
