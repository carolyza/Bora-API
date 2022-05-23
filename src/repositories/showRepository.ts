import { prisma } from "../database.js";

async function findShow(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      categoryId: 5,
    },
  });
}

export default {
  findShow,
};
