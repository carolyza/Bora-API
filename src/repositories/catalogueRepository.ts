import { prisma } from "../database.js";

async function insert(createData: any) {
  return prisma.catalogue.create({
    data: createData,
  });
}

export default {
  insert,
};
