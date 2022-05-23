import catalogueRepository from "../repositories/catalogueRepository.js";
import cityRepository from "../repositories/cityRepository.js";
import { Catalogue } from "@prisma/client";
import subcategory from "./subcategory.js";

//export type CreateData = Omit<Catalogue, "id">;

async function createArt(
  name: string,
  tagsartId: any,
  category: number,
  subcategory: number,
  state: number,
  city: number,
  sinopse: string,
  image: string,
  price: string,
  adress: string,
  pg: number,
  duration: string,
  link: string
) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    name,
    tagsartId: tagsartId,
    categoryId: category,
    subcategoryId: subcategory,
    statecityId,
    sinopse,
    image,
    price,
    adress,
    classificationId: pg,
    duration,
    link,
  };

  const catalogueId = await catalogueRepository.insert(data);
  return catalogueId.id;
}

export default {
  createArt,
};
