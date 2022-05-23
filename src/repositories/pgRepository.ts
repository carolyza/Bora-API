import { prisma } from "../database.js";

async function findPg(pg: any) {
  return prisma.classification.findFirst({
    where: {
      id: pg,
    },
  });
}

export default {
  findPg,
};
