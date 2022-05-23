import { Request, Response } from "express";
import pgService from "../services/pgService.js";

async function findPg(req: Request, res: Response) {
  const pg = req.body;
  const pgs = await pgService.findPg(pg);
  res.send({ pgs });
}

export default {
  findPg,
};
