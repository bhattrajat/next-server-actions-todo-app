import prisma from "../lib/prisma";

async function main() {
  const todo1 = await prisma.todo.upsert({
    where: { id: 1 },
    update: {
      name: "Complete online PostGres Course",
    },
    create: {
      name: "Complete online PostGres Course",
    },
  });
  const todo2 = await prisma.todo.upsert({
    where: { id: 2 },
    update: {
      name: "Walk for 10 minutes after dinner",
    },
    create: {
      name: "Walk for 10 minutes after dinner",
    },
  });
  // eslint-disable-next-line no-console
  console.log(todo1, todo2);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
