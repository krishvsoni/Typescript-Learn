import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "KRISH",
    lastName: "SONI"
})


async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }
  
  getUser("admin1");