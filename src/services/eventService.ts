import eventRepository from "../repositories/eventRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findEvent(state: number, city: number, sessions: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const data = {
    statecityId,
    sessions,
  };

  return await eventRepository.findEvent(data);
}

export default {
  findEvent,
};
