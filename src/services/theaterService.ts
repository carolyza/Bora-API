import theaterRepository from "../repositories/theaterRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findTheater(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await theaterRepository.findTheater(data);
}

export default {
  findTheater,
};
