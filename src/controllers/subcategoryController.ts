import { Request, Response } from "express";
import subcategoryService from "../services/subcategory.js";

async function findMany(req: Request, res: Response) {
  const subcategories = await subcategoryService.findMany();
  res.send({ subcategories });
}

export default {
  findMany,
};
