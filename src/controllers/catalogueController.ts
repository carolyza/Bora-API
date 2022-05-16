import { Request, Response } from "express";
import catalogueService from "../services/catalogueService.js";

async function createArt(req: Request, res: Response) {
  const {
    name,
    tags,
    category,
    date,
    state,
    city,
    sinopse,
    image,
    price,
    adress,
    pg,
    duration,
    hour,
    link,
  } = req.body;
  await catalogueService.createArt(
    name,
    tags,
    category,
    date,
    state,
    city,
    sinopse,
    image,
    price,
    adress,
    pg,
    duration,
    hour,
    link
  );
  res.sendStatus(201);
}

export default {
  createArt,
};
