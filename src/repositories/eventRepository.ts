import { prisma } from "../database.js";

async function findEvent(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      categoryId: 4,
    },
  });
}

export default {
  findEvent,
};
