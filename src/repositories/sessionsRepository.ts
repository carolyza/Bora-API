import { prisma } from "../database.js";

async function insert(formData: any) {
  console.log(formData);
  return prisma.sessions.create({
    data: formData,
  });
}

export default {
  insert,
};
