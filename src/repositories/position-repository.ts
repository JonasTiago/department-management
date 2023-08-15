import { Position } from '@prisma/client';
import prisma from '../config/db';

export type ProductInput = Omit<Position, 'id'>;

async function insertPosition(position: ProductInput): Promise<Position> {
  return await prisma.position.create({
    data: position,
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

async function findSumPositionById(id: number) {
  return await prisma.$queryRawUnsafe(
    'SELECT SUM(CAST(salary AS BIGINT)) as salary FROM "Position" p JOIN "Employee" e ON p.id = e."positionId" WHERE p.id = $1;',
    id
  );
}

async function findPosition() {
  return await prisma.position.findMany({});
}

export const positionRepository = {
  insertPosition,
  findPositionByName,
  findPositionById,
  findPosition,
  findSumPositionById,
};
