import { prisma } from "../database.js";

async function findMany() {
  return prisma.tag.findMany();
}

export default {
  findMany,
};
