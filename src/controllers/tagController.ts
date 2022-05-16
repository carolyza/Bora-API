import { Request, Response } from "express";
import tagService from "../services/tagService.js";

async function findMany(req: Request, res: Response) {
  const tags = await tagService.findMany();
  res.send({ tags });
}

export default {
  findMany,
};
