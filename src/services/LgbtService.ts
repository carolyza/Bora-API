import LgbtRepository from "../repositories/LgbtRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findLgbt(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await LgbtRepository.findLgbt(data);
}

export default {
  findLgbt,
};
