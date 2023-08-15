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
  const id = Number(req.params.id);
  try {
    const positionSpecific = await positionService.findPositionById(id);
    res.status(200).send(positionSpecific);
  } catch (erro) {
    if (erro === 'Position not found!') return res.status(404).send(erro);
    res.status(500).send(erro);
  }
}

export async function getPositions(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const listPosition = await positionService.findPosition();
    res.status(200).send(listPosition);
  } catch (erro) {
    if (erro === 'position exist!') return res.status(409).send(erro);
    res.status(500).send(erro);
  }
}

export async function getSumSpecifcPosition(
  req: Request,
  res: Response
): Promise<Response> {
  const id = Number(req.params.id);
  try {
    const sumPosition = await positionService.findSumPositionById(id);
    res.status(200).json(sumPosition);
  } catch (erro) {
    if (erro === 'Position not found!') return res.status(409).send(erro);
    res.status(500).send(erro);
  }
}
