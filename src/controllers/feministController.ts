import { Request, Response } from "express";
import feministService from "../services/feministService.js";

async function findFeminist(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await feministService.findFeminist(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findFeminist,
};
