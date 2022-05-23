import { Request, Response } from "express";
import showService from "../services/showService.js";

async function findShow(req: Request, res: Response) {
  const { state, city, sessions } = req.body;

  const catalogue = await showService.findShow(state, city, sessions);
  res.send({ catalogue });
}

export default {
  findShow,
};
