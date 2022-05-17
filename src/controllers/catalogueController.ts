import { Request, Response } from "express";
import catalogueService from "../services/catalogueService.js";

async function createArt(req: Request, res: Response) {
  const {
    name,
    tags,
    category,
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
  await catalogueService.createArt(
    name,
    tags,
    category,
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
  res.sendStatus(201);
}

export default {
  createArt,
};
