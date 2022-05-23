import { Request, Response } from "express";
import theaterService from "../services/theaterService.js";

async function findTheater(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await theaterService.findTheater(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findTheater,
};
