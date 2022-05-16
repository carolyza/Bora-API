import { prisma } from "../database.js";

async function findMany() {
  return prisma.city.findMany();
}

async function getCitiesByState(stateId: number) {
  return prisma.stateCity.findMany({
    select: {
      city: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    where: {
      stateId,
    },
  });
}

async function findStateCity(city: number, state: number) {
  return prisma.stateCity.findFirst({
    where: {
      cityId: city,
      stateId: state,
    },
  });
}

export default {
  findMany,
  getCitiesByState,
  findStateCity,
};
