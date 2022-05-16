import { Request, Response } from "express";
import classificationService from "../services/classificationService.js";

async function findMany(req: Request, res: Response) {
  const classifications = await classificationService.findMany();
  res.send({ classifications });
}

export default {
  findMany,
};
