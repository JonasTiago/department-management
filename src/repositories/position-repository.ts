import { Position } from '@prisma/client';
import prisma from '../config/db';

export type ProductInput = Omit<Position, 'id'>;

async function insertPosition(protuct: ProductInput): Promise<Position> {
  return await prisma.position.create({
    data: protuct,
  });
}

async function findPositionByName(name: string) {
  return await prisma.position.findFirst({
    where: {
      name,
    },
  });
}

async function findPositionById(id: number) {
  return await prisma.position.findUnique({
    where: {
      id,
    },
  });
}

async function findPosition() {
  return await prisma.position.findMany({});
}
export const positionRepository = {
  insertPosition,
  findPositionByName,
  findPositionById,
  findPosition,
};
