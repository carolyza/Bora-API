import stateRepository from "../repositories/stateRepository.js";

async function findMany() {
  return stateRepository.findMany();
}

export default {
  findMany,
};
