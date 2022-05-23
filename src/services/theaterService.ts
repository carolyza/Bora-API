import theaterRepository from "../repositories/theaterRepository.js";
import cityRepository from "../repositories/cityRepository.js";

async function findTheater(state: number, city: number, date: any) {
  const { id: statecityId } = await cityRepository.findStateCity(city, state);

  const ids = await theaterRepository.findSession(date);

  const { catalogueId: catalogueId } = await theaterRepository.findSessions(
    ids
  );

  const data = {
    statecityId,
    catalogueId,
  };

  return await theaterRepository.findTheater(data);
}

async function findSession(date) {
  return theaterRepository.findSession(date);
}

async function findSessions(sessionId) {
  return theaterRepository.findSessions(sessionId);
}

export default {
  findTheater,
  findSession,
  findSessions,
};
