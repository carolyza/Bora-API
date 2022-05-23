import blackArtRepository from "../repositories/blackArtRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findBlack(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await blackArtRepository.findBlack(data);
}

export default {
  findBlack,
};
