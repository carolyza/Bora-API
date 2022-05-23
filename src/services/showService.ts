import showRepository from "../repositories/showRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findShow(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await showRepository.findShow(data);
}

export default {
  findShow,
};
