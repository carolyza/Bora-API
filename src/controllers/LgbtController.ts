import { Request, Response } from "express";
import LgbtService from "../services/LgbtService.js";

async function findLgbt(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await LgbtService.findLgbt(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findLgbt,
};
