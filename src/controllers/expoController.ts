import { Request, Response } from "express";
import expoService from "../services/expoService.js";

async function findExpo(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await expoService.findExpo(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findExpo,
};
