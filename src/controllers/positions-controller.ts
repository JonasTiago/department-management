import { Request, Response } from 'express';
import { positionService } from '../services/positions-service';

export async function createPosition(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, salary } = req.body;

  try {
    const createPosition = await positionService.createPosition({
      name,
      salary,
    });
    res.status(201).send(createPosition);
  } catch (erro) {
    if (erro === 'position exist!') return res.status(409).send(erro);
    res.status(500).send(erro);
  }
}

export async function getSpecifcPosition(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.query;

  try {
    const createPosition = await positionService.findPositionById(Number(id));
    res.status(201).send(createPosition);
  } catch (erro) {
    if (erro === 'position exist!') return res.status(409).send(erro);
    res.status(500).send(erro);
  }
} /*
export async function getPositions(
  req: Request,
  res: Response
): Promise<Response> {
  const { salary } = req.body;

  const position: ICargo = {
    salary,
  };

  const { error } = positionSchema.validate(position, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw errors;
  }

  try {
    const createPosition = await positionService.createPosition({
      salary,
    });
    res.status(201).send(createPosition);
  } catch (erro) {
    if (erro === 'position exist!') return res.status(409).send(erro);
    res.status(500).send(erro);
  }
}*/
