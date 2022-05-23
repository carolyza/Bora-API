import { prisma } from "../database.js";

async function findTags(tag: any) {
  return prisma.tagsArt.findFirst({
    where: {
      id: tag,
    },
  });
}

export default {
  findTags,
};
