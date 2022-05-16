import { Request, Response } from "express";
import cityService from "../services/cityService.js";

async function findMany(req: Request, res: Response) {
  const cities = await cityService.findMany();
  res.send({ cities });
}

async function findByState(req: Request, res: Response) {
  const { state } = req.params;

  const cities = await cityService.findByState(parseInt(state));
  res.send({ cities });
}

export default {
  findMany,
  findByState,
};
