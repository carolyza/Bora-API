import sessionsRepository from "../repositories/sessionsRepository.js";

async function createSessions(sessionId: any, catalogueId: number) {
  console.log(sessionId);
  const data = {
    sessionId: sessionId,
    catalogueId: catalogueId,
  };

  console.log(data);

  await sessionsRepository.insert(data);
}

async function findSessions(sessionId: any) {
  return sessionsRepository.findSessions(sessionId);
}

export default {
  createSessions,
  findSessions,
};
