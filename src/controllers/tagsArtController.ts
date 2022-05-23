import { Request, Response } from "express";
import tagsArtService from "../services/tagsArtService.js";

async function findTags(req: Request, res: Response) {
  const tag = req.body;
  const tags = await tagsArtService.findTags(tag);
  res.send({ tags });
}

export default {
  findTags,
};
