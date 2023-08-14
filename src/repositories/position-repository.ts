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

export const positionRepository = {
  insertPosition,
  findPositionByName,
};
