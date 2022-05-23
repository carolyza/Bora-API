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

export default {
  createSessions,
};
