import feministRepository from "../repositories/feministRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findFeminist(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await feministRepository.findFeminist(data);
}

export default {
  findFeminist,
};
