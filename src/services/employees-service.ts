import { employeesSchema } from '../models/employees-model';
import { employeesRepository } from '../repositories/employees-repository';
import { positionRepository } from '../repositories/position-repository';

interface Employees {
  name: string;
  positionId: number;
}

async function createEmployees({ name, positionId }: Employees) {
  const { error } = employeesSchema.validate(
    { name, positionId },
    { abortEarly: false }
  );

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw errors;
  }

  const employees = await employeesRepository.findEmployeesByName(name);

  if (employees) throw 'employees exist!';

  const position = await positionRepository.findPositionById(positionId);

  if (!position) throw 'position do not exite!';

  return await employeesRepository.insertEmployees({ name, positionId });
}

async function findEmployeesById(id: number) {
  const employeeSpecific = await employeesRepository.findEmployeesById(id);
  if (!employeeSpecific) throw 'employee not found!';
  return employeeSpecific;
}

async function findAllEmployees() {
  return employeesRepository.findEmployees();
}

export const employeesService = {
  createEmployees,
  findEmployeesById,
  findAllEmployees,
};
