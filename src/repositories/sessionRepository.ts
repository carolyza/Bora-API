import { prisma } from "../database.js";

async function insert(createData: any) {
  return prisma.session.create({
    data: {
      date: createData.createData.date,
      hour: createData.createData.hour,
    },
  });
}

export default {
  insert,
};
