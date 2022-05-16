import tagRepository from "../repositories/tagRepository.js";

async function findMany() {
  return tagRepository.findMany();
}

export default {
  findMany,
};
