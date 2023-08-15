import { Router } from 'express';
import {
  createEmployees,
  findSpecificEmployee,
  findAllEmployees,
} from '../controllers/employees-controller';

const employeesRouter = Router();
employeesRouter.post('/employees', createEmployees);
employeesRouter.get('/employees/:id', findSpecificEmployee);
employeesRouter.get('/employees', findAllEmployees);

export default employeesRouter;
