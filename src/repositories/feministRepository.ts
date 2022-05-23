import { prisma } from "../database.js";

async function findFeminist(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      categoryId: 2,
    },
  });
}

export default {
  findFeminist,
};
