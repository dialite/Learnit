const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Music" },
        { name: "Engineering" },
        { name: "Accounting" },
        { name: "Videography" },
        { name: "Innovations" },
        { name: "Skills Acquisition" },
      ],
    });

    console.log('Success');
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main()
