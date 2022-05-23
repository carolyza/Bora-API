import sessionRepository from "../repositories/sessionRepository.js";

async function createSession(createData: any) {
  const data = {
    createData,
  };

  const session = await sessionRepository.insert(data);
  return session.id;
}

async function findSession(formData) {
  const data = {
    formData,
  };
  return sessionRepository.findSession(data);
}

export default {
  createSession,
  findSession,
};
