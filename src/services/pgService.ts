import pgRepository from "../repositories/pgRepository.js";

async function findPg(pg: any) {
  return pgRepository.findPg(pg);
}

export default {
  findPg,
};
