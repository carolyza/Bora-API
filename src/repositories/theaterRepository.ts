import { prisma } from "../database.js";

async function findTheater(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      categoryId: 1,
    },
  });
}

export default {
  findTheater,
};
