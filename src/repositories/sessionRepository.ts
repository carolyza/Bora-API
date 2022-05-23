import { prisma } from "../database.js";

async function insert(createData: any) {
  return prisma.session.create({
    data: {
      date: createData.createData.date,
      hour: createData.createData.hour,
    },
  });
}

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

export default {
  insert,
  findSession,
};
