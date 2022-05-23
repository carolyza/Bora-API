import danceRepository from "../repositories/danceRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findDance(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await danceRepository.findDance(data);
}

export default {
  findDance,
};
