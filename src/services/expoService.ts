import expoRepository from "../repositories/expoRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findExpo(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await expoRepository.findExpo(data);
}

export default {
  findExpo,
};
