import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.events.deleteMany();
  //   await prisma.category.deleteMany(); (dijadiin atendees aj kali)
  //   await prisma.categoryPost.deleteMany(); (dijadiin organizers aj kali)

  /* -------------------------------------------------------------------------- */
  /*                                   EVENTS                                   */
  /* -------------------------------------------------------------------------- */
  async function events() {
    const event1 = await prisma.events.create({
      data: {
        title: "Journey to the Unknown",
        desc: "Exploring the mysteries of the universe.",
        categories: "Hobbies",
        upcoming: true,
      },
    });

    const event2 = await prisma.events.create({
      data: {
        title: "The Art of Mindfulness",
        desc: "A guide to living in the present moment.",
        categories: "Arts",
        upcoming: false,
      },
    });

    const event3 = await prisma.events.create({
      data: {
        title: "Tech Innovations 2023",
        desc: "Discover the latest advancements in technology.",
        categories: "Bussiness",
        upcoming: true,
      },
    });

    const event4 = await prisma.events.create({
      data: {
        title: "Culinary Delights",
        desc: "A journey through the world of gourmet cuisine.",
        categories: "Food",
        upcoming: false,
      },
    });

    const event5 = await prisma.events.create({
      data: {
        title: "Global Eco-Friendly Company Forum",
        desc: "to make the world a better place.",
        categories: "Bussiness",
        upcoming: false,
      },
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 GATEGORIES                                 */
  /* -------------------------------------------------------------------------- */
//   async function categories() {
//     const category1 = await prisma.categories.create({
//       data: {
//         name: "Music",
//         preview: "Lorem ipsum",
//         imageURL:
//           "https://images.unsplash.com/photo-1735779411146-79e19ac891cc?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     });
//     const category2 = await prisma.categories.create({
//       data: {
//         name: "Memory Lane",
//         preview: "Lorem ipsum",
//         imageURL:
//           "https://images.unsplash.com/photo-1721332149112-c54e68990d99?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     });
//     const category3 = await prisma.categories.create({
//       data: {
//         name: "Soul Scribbles",
//         preview: "Lorem ipsum",
//         imageURL:
//           "https://plus.unsplash.com/premium_photo-1736668905572-66a589ea2847?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     });
//     const category4 = await prisma.categories.create({
//       data: {
//         name: "The Daily Grind",
//         preview: "Lorem ipsum",
//         imageURL:
//           "https://images.unsplash.com/photo-1736613403120-8d48aebd29e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     });
//   }

  return events();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
  });
