import tagsArtRepository from "../repositories/tagsArtRepository.js";

async function findTags(tag: any) {
  return tagsArtRepository.findTags(tag);
}

export default {
  findTags,
};
