import subcategoryRepository from "../repositories/subcategoryRepository.js";

async function findMany() {
  return subcategoryRepository.findMany();
}

export default {
  findMany,
};
