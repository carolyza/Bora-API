import catalogueRepository from "../repositories/catalogueRepository.js";
import cityRepository from "../repositories/cityRepository.js";
import { Catalogue } from "@prisma/client";

//export type CreateData = Omit<Catalogue, "id">;

async function createArt(
  name: string,
  image: string,
  category: number,
  sinopse: string,
  state: number,
  city: number,
  price: string,
  adress: string,
  pg: number,
  duration: string,
  tags: number,
  date: any,
  hour: string,
  link: string
) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    name,
    tagId: tags,
    categoryId: category,
    date,
    statecityId,
    sinopse,
    image,
    price,
    adress,
    classificationId: pg,
    duration,
    hour,
    link,
  };

  await catalogueRepository.insert(data);
}

export default {
  createArt,
};
