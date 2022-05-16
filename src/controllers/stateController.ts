import { Request, Response } from "express";
import stateService from "../services/stateService.js";

async function findMany(req: Request, res: Response) {
  const states = await stateService.findMany();
  res.send({ states });
}

export default {
  findMany,
};
