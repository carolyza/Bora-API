import { prisma } from "../database.js";

async function insert(formData: any) {
  console.log(formData);
  return prisma.sessions.create({
    data: formData,
  });
}

async function findSessions(sessionId: any) {
  return prisma.sessions.findFirst({
    where: {
      sessionId: sessionId,
    },
    select: {
      catalogueId: true,
    },
  });
}

export default {
  insert,
  findSessions,
};
