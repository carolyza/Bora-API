import classificationRepository from "../repositories/classificationRepository.js";

async function findMany() {
  return classificationRepository.findMany();
}

export default {
  findMany,
};
