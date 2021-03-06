import { prisma } from "../database.js";

async function findFeminist(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      subcategoryId: 1,
    },
  });
}

export default {
  findFeminist,
};
