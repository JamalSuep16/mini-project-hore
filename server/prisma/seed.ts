import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.event.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.feedback.deleteMany();
  await prisma.user.deleteMany();
  await prisma.badges.deleteMany();
  await prisma.order.deleteMany();

  /* -------------------------------------------------------------------------- */
  /*                                   EVENTS                                   */
  /* -------------------------------------------------------------------------- */
  // await prisma.event.createMany({
  //   data: [
  //     {
  //       title: "Journey to the Unknown",
  //       desc: "Exploring the mysteries of the universe.",
  //       categories: "Hobbies",
  //       upcoming: true,
  //     },
  //     {
  //       title: "The Art of Mindfulness",
  //       desc: "A guide to living in the present moment.",
  //       categories: "Arts",
  //       upcoming: false,
  //     },
  //     {
  //       title: "Tech Innovations 2023",
  //       desc: "Discover the latest advancements in technology.",
  //       categories: "Bussiness",
  //       upcoming: true,
  //     },
  //     {
  //       title: "Culinary Delights",
  //       desc: "A journey through the world of gourmet cuisine.",
  //       categories: "Food",
  //       upcoming: false,
  //     },
  //     {
  //       title: "Global Eco-Friendly Company Forum",
  //       desc: "to make the world a better place.",
  //       categories: "Bussiness",
  //       upcoming: false,
  //     },
  //   ],
  // });

  const event1 = await prisma.event.create({
    data: {
      title: "Journey to the Unknown",
      desc: "Exploring the mysteries of the universe.",
      categories: Hobbies.name,
      upcoming: true,
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: "The Art of Mindfulness",
      desc: "A guide to living in the present moment.",
      categories: "Arts",
      upcoming: false,
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: "Tech Innovations 2023",
      desc: "Discover the latest advancements in technology.",
      categories: "Bussiness",
      upcoming: true,
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: "Culinary Delights",
      desc: "A journey through the world of gourmet cuisine.",
      categories: "Food",
      upcoming: false,
    },
  });

  const event5 = await prisma.event.create({
    data: {
      title: "Global Eco-Friendly Company Forum",
      desc: "to make the world a better place.",
      categories: "Bussiness",
      upcoming: false,
    },
  });

  /* -------------------------------------------------------------------------- */
  /*                                  USER                                  */
  /* -------------------------------------------------------------------------- */
  const user1 = await prisma.user.create({
    data: {
      name: "Bambank",
      username: "bambank123",
      password: "pass1",
      email: "bambank@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Alice",
      username: "alice456",
      password: "pass2",
      email: "alice@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Charlie",
      username: "charlie789",
      password: "pass3",
      email: "charlie@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user4 = await prisma.user.create({
    data: {
      name: "David",
      username: "david101",
      password: "pass4",
      email: "david@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user5 = await prisma.user.create({
    data: {
      name: "Emma",
      username: "emma202",
      password: "pass5",
      email: "emma@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user6 = await prisma.user.create({
    data: {
      name: "Frank",
      username: "frank303",
      password: "pass6",
      email: "frank@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user7 = await prisma.user.create({
    data: {
      name: "Grace",
      username: "grace404",
      password: "pass7",
      email: "grace@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user8 = await prisma.user.create({
    data: {
      name: "Henry",
      username: "henry505",
      password: "pass8",
      email: "henry@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user9 = await prisma.user.create({
    data: {
      name: "Isla",
      username: "isla606",
      password: "pass9",
      email: "isla@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  const user10 = await prisma.user.create({
    data: {
      name: "Jack",
      username: "jack707",
      password: "pass10",
      email: "jack@gmail.com",
      emailConfirmed: true,
      role: "USER",
    },
  });

  /* -------------------------------------------------------------------------- */
  /*                                  ORDER                                  */
  /* -------------------------------------------------------------------------- */

  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      eventId: event1.id,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user1.id,
      eventId: event2.id,
    },
  });

  const order3 = await prisma.order.create({
    data: {
      userId: user1.id,
      eventId: event3.id,
    },
  });

  const order4 = await prisma.order.create({
    data: {
      userId: user1.id,
      eventId: event4.id,
    },
  });

  const order5 = await prisma.order.create({
    data: {
      userId: user1.id,
      eventId: event5.id,
    },
  });

  const order6 = await prisma.order.create({
    data: {
      userId: user2.id,
      eventId: event1.id,
    },
  });

  const order7 = await prisma.order.create({
    data: {
      userId: user3.id,
      eventId: event1.id,
    },
  });

  async function events() {
    await prisma.events.createMany({
      data: [
        {
          title: "Journey to the Unknown",
          desc: "Exploring the mysteries of the universe.",
          categories: "Hobbies",
          upcoming: true,
        },
        {
          title: "The Art of Mindfulness",
          desc: "A guide to living in the present moment.",
          categories: "Arts",
          upcoming: false,
        },
        {
          title: "Tech Innovations 2023",
          desc: "Discover the latest advancements in technology.",
          categories: "Bussiness",
          upcoming: true,
        },
        {
          title: "Culinary Delights",
          desc: "A journey through the world of gourmet cuisine.",
          categories: "Food",
          upcoming: false,
        },
        {
          title: "Global Eco-Friendly Company Forum",
          desc: "to make the world a better place.",
          categories: "Bussiness",
          upcoming: false,
        },
      ],
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 GATEGORIES                                 */
  /* -------------------------------------------------------------------------- */
  async function categories() {
    const Food = await prisma.categories.create({
      data: {
        name: "Food",
        preview: "Lorem ipsum",
        imageURL:
          "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    });
    const Bussiness = await prisma.categories.create({
      data: {
        name: "Bussiness",
        preview: "Lorem ipsum",
        imageURL:
          "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    });
    const Arts = await prisma.categories.create({
      data: {
        name: "Arts",
        preview: "Lorem ipsum",
        imageURL:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    });
    const Hobbies = await prisma.categories.create({
      data: {
        name: "Hobbies",
        preview: "Lorem ipsum",
        imageURL:
          "https://images.unsplash.com/photo-1736613403120-8d48aebd29e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  FEEDBACK                                  */
  /* -------------------------------------------------------------------------- */

  async function feedback() {
    const coolFeedback = await prisma.feedback.create({
      data: {
        comments: "WAAAWW, gila keren banget coi",
        ratings: "lima",
        suggestions: "gak ada sih cuma semoga lebih gacor lagi ygy",
      },
    });

    const amazingFeedback = await prisma.feedback.create({
      data: {
        comments: "Wow, this is absolutely amazing!",
        ratings: "five",
        suggestions: "Nothing much, just keep up the great work!",
      },
    });

    const impressiveFeedback = await prisma.feedback.create({
      data: {
        comments: "Really impressive! I love the effort put into this.",
        ratings: "four",
        suggestions: "Maybe some minor improvements in responsiveness.",
      },
    });

    const disappointingFeedback = await prisma.feedback.create({
      data: {
        comments: "This was honestly disappointing. I expected more.",
        ratings: "two",
        suggestions: "The UI feels outdated, and the performance is sluggish.",
      },
    });

    const terribleFeedback = await prisma.feedback.create({
      data: {
        comments: "Terrible experience. So many bugs and crashes frequently.",
        ratings: "one",
        suggestions:
          "Please fix the stability issues before adding new features.",
      },
    });

    const decentFeedback = await prisma.feedback.create({
      data: {
        comments: "Not bad at all! I enjoyed using this.",
        ratings: "four",
        suggestions: "Maybe add a dark mode option for better usability.",
      },
    });
  }

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
