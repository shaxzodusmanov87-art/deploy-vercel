import { PrismaClient } from "../app/generated/prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

const userData = [
  {
    name: "Jasur",
    email: "jasur@prisma.io",
    posts: {
      create: [
        { title: "Join the Prisma Discord", content: "https://pris.ly/discord", published: true },
        { title: "Prisma on YouTube", content: "https://pris.ly/youtube" }
      ]
    }
  },
  {
    name: "Samir",
    email: "samka@prisma.io",
    posts: {
      create: [
        { title: "Follow Prisma on Twitter", content: "https://www.twitter.com/prisma", published: true }
      ]
    }
  }
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
  console.log("Seed finished.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
