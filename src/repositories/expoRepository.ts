import { prisma } from "../database.js";

async function findExpo(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      categoryId: 3,
    },
  });
}

export default {
  findExpo,
};
