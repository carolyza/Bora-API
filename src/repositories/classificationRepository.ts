import { prisma } from "../database.js";

async function findMany() {
  return prisma.classification.findMany();
}

export default {
  findMany,
};
