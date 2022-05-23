import { prisma } from "../database.js";

async function findMany() {
  return prisma.subCategory.findMany();
}

export default {
  findMany,
};
