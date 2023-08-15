import { Request, Response } from 'express';
import { employeesService } from '../services/employees-service';

export async function createEmployees(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, codigo, positionId } = req.body;

  try {
    const createEmployees = await employeesService.createEmployees({
      name,
      codigo,
      positionId,
    });
    res.status(201).send(createEmployees);
  } catch (erro) {
    if (erro === 'employees exist!') return res.status(409).send(erro);
    if (erro === 'position do not exite!') return res.status(404).send(erro);
    res.status(500).send(erro);
  }
}

export async function findSpecificEmployee(
  req: Request,
  res: Response
): Promise<Response> {
  const id = Number(req.params.id);

  try {
    const employees = await employeesService.findEmployeesById(id);
    res.status(201).send(employees);
  } catch (erro) {
    if (erro === 'employee not found!') return res.status(404).send(erro);
    res.status(500).send(erro);
  }
}

export async function findAllEmployees(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const createEmployees = await employeesService.findAllEmployees();
    res.status(201).send(createEmployees);
  } catch (erro) {
    if (erro === 'employee not found!') return res.status(404).send(erro);
    res.status(500).send(erro);
  }
}
