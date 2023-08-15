import { Employee } from '@prisma/client';
import prisma from '../config/db';

export type EmployeeInput = Omit<Employee, 'id'>;

async function insertEmployees(employee: EmployeeInput) {
  return await prisma.employee.create({
    data: employee,
  });
}

async function findEmployeesByName(name: string) {
  return await prisma.employee.findFirst({
    where: {
      name,
    },
  });
}

async function findEmployeesById(id: number) {
  return await prisma.employee.findUnique({
    where: {
      id,
    },
    include: {
      position: true,
    },
  });
}

async function findEmployees() {
  return await prisma.employee.findMany({});
}

export const employeesRepository = {
  insertEmployees,
  findEmployeesByName,
  findEmployeesById,
  findEmployees,
};
