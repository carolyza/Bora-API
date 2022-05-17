import catalogueRepository from "../repositories/catalogueRepository.js";
import cityRepository from "../repositories/cityRepository.js";
import { Catalogue } from "@prisma/client";

//export type CreateData = Omit<Catalogue, "id">;

async function createArt(
  name: string,
  tag: number,
  category: number,
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
    tagId: tag,
    categoryId: category,
    statecityId,
    sinopse,
    image,
    price,
    adress,
    classificationId: pg,
    duration,
    link,
  };

  await catalogueRepository.insert(data);
}

export default {
  createArt,
};
