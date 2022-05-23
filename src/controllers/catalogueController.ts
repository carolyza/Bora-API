import { Request, Response } from "express";
import catalogueService from "../services/catalogueService.js";

async function createArt(req: Request, res: Response) {
  const {
    name,
    tagsartId,
    category,
    subcategory,
    state,
    city,
    sinopse,
    image,
    price,
    adress,
    pg,
    duration,
    link,
  } = req.body;

  const id = await catalogueService.createArt(
    name,
    tagsartId,
    category,
    subcategory,
    state,
    city,
    sinopse,
    image,
    price,
    adress,
    pg,
    duration,
    link
  );
  res.status(201).send({ id });
}

export default {
  createArt,
};
