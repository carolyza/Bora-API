import { prisma } from "../database.js";

async function findMany() {
  return prisma.tag.findMany();
}

async function patchTag(id: any, tags: any) {
  return prisma.tagsArt.update({
    where: {
      id,
    },
    data: {
      tag: tags,
    },
  });
}

async function postTag(tags: any) {
  return prisma.tagsArt.create({
    data: {
      tag: tags,
    },
  });
}

export default {
  findMany,
  patchTag,
  postTag,
};
