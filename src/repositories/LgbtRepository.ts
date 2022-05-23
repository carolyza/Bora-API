import { prisma } from "../database.js";

async function findLgbt(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      subcategoryId: 3,
    },
  });
}

export default {
  findLgbt,
};
