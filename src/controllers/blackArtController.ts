import { Request, Response } from "express";
import blackArtService from "../services/blackArtService.js";

async function findBlack(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await blackArtService.findBlack(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findBlack,
};
