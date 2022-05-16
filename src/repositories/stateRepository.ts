import { prisma } from "../database.js";

async function findMany() {
  return prisma.state.findMany();
}

export default {
  findMany,
};
