import sessionRepository from "../repositories/sessionRepository.js";

async function createSession(createData: any) {
  const data = {
    createData,
  };

  const session = await sessionRepository.insert(data);
  return session.id;
}

export default {
  createSession,
};
