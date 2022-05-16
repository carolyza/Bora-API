import cityRepository from "../repositories/cityRepository.js";

async function findMany() {
  return cityRepository.findMany();
}

async function findByState(state) {
  return cityRepository.getCitiesByState(state);
}

export default {
  findMany,
  findByState,
};
