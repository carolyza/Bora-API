import { Request, Response } from "express";
import danceService from "../services/danceService.js";

async function findDance(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await danceService.findDance(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findDance,
};
