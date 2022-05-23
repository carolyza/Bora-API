import { Request, Response } from "express";
import tagService from "../services/tagService.js";

async function findMany(req: Request, res: Response) {
  const tags = await tagService.findMany();
  res.send({ tags });
}

async function postTag(req: Request, res: Response) {
  const { tags } = req.body;
  const id = await tagService.postTag(tags);

  res.status(201).send({ id });
}

async function patchTag(req: Request, res: Response) {
  const { id } = req.params;
  const { tags } = req.body;
  const tag = await tagService.patchTag(parseInt(id), tags);
  res.send({ tag });
}

export default {
  findMany,
  postTag,
  patchTag,
};
