import tagRepository from "../repositories/tagRepository.js";

async function findMany() {
  return tagRepository.findMany();
}

async function patchTag(id: any, tags: any) {
  await tagRepository.patchTag(id, tags);
}

async function postTag(tags: any) {
  const tag = await tagRepository.postTag(tags);
  return tag.id;
}

export default {
  findMany,
  postTag,
  patchTag,
};
