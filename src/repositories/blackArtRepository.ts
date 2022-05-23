import { prisma } from "../database.js";

async function findBlack(formData: any) {
  return prisma.catalogue.findFirst({
    where: {
      id: formData.sessions,
      statecity: formData.stateCityId,
      subcategoryId: 2,
    },
  });
}

export default {
  findBlack,
};
