import { prisma } from "../database.js";

async function findSession(date: any) {
  return prisma.session.findMany({
    where: {
      date: date,
    },
    select: {
      id: true,
    },
  });
}

async function findSessions(sessionId: any) {
  return prisma.sessions.findFirst({
    where: {
      sessionId: sessionId,
    },
  });
}

async function findTheater(formData: any) {
  return prisma.catalogue.findMany({
    where: {
      id: formData.catalogueId,
      statecity: formData.stateCityId,
      categoryId: 1,
    },
  });
}

export default {
  findSession,
  findSessions,
  findTheater,
};
