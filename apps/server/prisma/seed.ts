import { PrismaClient } from "@prisma/client";
import bcrypt, { compare, genSalt, hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.event.deleteMany();
  await prisma.categoriess.deleteMany();
  await prisma.feedback.deleteMany();
  await prisma.user.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.order.deleteMany();

  /* -------------------------------------------------------------------------- */
  /*                                   EVENTS                                   */
  /* -------------------------------------------------------------------------- */
  const event1 = await prisma.event.create({
    data: {
      title: "Journey to the Unknown",
      desc: "Exploring the mysteries of the universe.",
      slug: "journey-to-the-unknown",
      location: "Jakarta",
      categories: "Music",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: true,
      price: 1000,
      date: new Date("2025-03-15T18:00:00Z"),
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: "The Art of Mindfulness",
      desc: "A guide to living in the present moment.",
      slug: "the-art-of-mindfulness",
      location: "Bali",
      categories: "Arts",
      image:
        "https://plus.unsplash.com/premium_photo-1661767490975-f31a02946f48?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: false,
      price: 800,
      date: new Date("2024-07-10T10:00:00Z"),
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: "Tech Innovations 2023",
      desc: "Discover the latest advancements in technology.",
      slug: "tech-innovations-2023",
      location: "Jogjakarta",
      categories: "Bussiness",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: true,
      price: 1500,
      date: new Date("2024-11-22T09:00:00Z"),
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: "Culinary Delights",
      desc: "A journey through the world of gourmet cuisine.",
      slug: "culinary-delights",
      location: "Batam",
      categories: "Food",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: false,
      price: 1200,
      date: new Date("2023-12-05T19:30:00Z"),
    },
  });

  const event5 = await prisma.event.create({
    data: {
      title: "Global Eco-Friendly Company Forum",
      desc: "To make the world a better place.",
      slug: "global-eco-friendly-company-forum",
      location: "Jakarta",
      categories: "Bussiness",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: false,
      price: 2000,
      date: new Date("2024-05-18T14:00:00Z"),
    },
  });

  const event6 = await prisma.event.create({
    data: {
      title: "Yoga and Wellness Retreat",
      desc: "A weekend of relaxation and rejuvenation.",
      slug: "yoga-and-wellness-retreat",
      location: "Bali",
      categories: "Food",
      image:
        "https://images.unsplash.com/photo-1527786747587-f712769de1e2?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: true,
      price: 500,
      date: new Date("2024-09-20T08:00:00Z"),
    },
  });

  const event7 = await prisma.event.create({
    data: {
      title: "Photography Workshop",
      desc: "Learn the art of photography from professionals.",
      slug: "photography-workshop",
      location: "Jogjakarta",
      categories: "Arts",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: false,
      price: 700,
      date: new Date("2024-06-15T10:00:00Z"),
    },
  });

  const event8 = await prisma.event.create({
    data: {
      title: "Startup Pitch Night",
      desc: "Pitch your startup idea to potential investors.",
      slug: "startup-pitch-night",
      location: "Batam",
      categories: "Bussiness",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: true,
      price: 1000,
      date: new Date("2024-12-01T18:00:00Z"),
    },
  });

  const event9 = await prisma.event.create({
    data: {
      title: "Cooking Masterclass",
      desc: "Master the art of cooking with top chefs.",
      slug: "cooking-masterclass",
      location: "Jakarta",
      categories: "Food",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: false,
      price: 1200,
      date: new Date("2024-03-10T14:00:00Z"),
    },
  });

  const event10 = await prisma.event.create({
    data: {
      title: "Van Gogh In 2025",
      desc: "Join the annual marathon and test your endurance.",
      slug: "van-gogh-in-2025",
      location: "Amsterdam",
      categories: "Arts",
      image:
        "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upcoming: true,
      price: 300,
      date: new Date("2024-05-25T06:00:00Z"),
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

  /* -------------------------------------------------------------------------- */
  /*                                 GATEGORIES                                 */
  /* -------------------------------------------------------------------------- */

  const Food = await prisma.categoriess.create({
    data: {
      name: "Food",
      preview: "Lorem ipsum",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });
  const Bussiness = await prisma.categoriess.create({
    data: {
      name: "Bussiness",
      preview: "Lorem ipsum",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });
  const Arts = await prisma.categoriess.create({
    data: {
      name: "Arts",
      preview: "Lorem ipsum",
      imageURL:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });
  const Music = await prisma.categoriess.create({
    data: {
      name: "Music",
      preview: "Lorem ipsum",
      imageURL:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });

  /* -------------------------------------------------------------------------- */
  /*                                  FEEDBACK                                  */
  /* -------------------------------------------------------------------------- */

  const coolFeedback = await prisma.feedback.create({
    data: {
      title: "Cool",
      comments: "WAAAWW, gila keren banget coi",
      ratings: 5,
      suggestions: "gak ada sih cuma semoga lebih gacor lagi ygy",
      userId: user1.id,
      eventId: event1.id,
    },
  });

  const amazingFeedback = await prisma.feedback.create({
    data: {
      title: "Amazing",
      comments: "Wow, this is absolutely amazing!",
      ratings: 5,
      suggestions: "Nothing much, just keep up the great work!",
      userId: user1.id,
      eventId: event2.id,
    },
  });

  const impressiveFeedback = await prisma.feedback.create({
    data: {
      title: "impressive",
      comments: "Really impressive! I love the effort put into this.",
      ratings: 4,
      suggestions: "Maybe some minor improvements in responsiveness.",
      userId: user1.id,
      eventId: event3.id,
    },
  });

  const disappointingFeedback = await prisma.feedback.create({
    data: {
      title: "disappointing",
      comments: "This was honestly disappointing. I expected more.",
      ratings: 2,
      suggestions: "The UI feels outdated, and the performance is sluggish.",
      userId: user1.id,
      eventId: event4.id,
    },
  });

  const terribleFeedback = await prisma.feedback.create({
    data: {
      title: "terrible",
      comments: "Terrible experience. So many bugs and crashes frequently.",
      ratings: 1,
      suggestions:
        "Please fix the stability issues before adding new features.",
      userId: user1.id,
      eventId: event5.id,
    },
  });

  const decentFeedback = await prisma.feedback.create({
    data: {
      title: "decent",
      comments: "Not bad at all! I enjoyed using this.",
      ratings: 4,
      suggestions: "Maybe add a dark mode option for better usability.",
      userId: user3.id,
      eventId: event1.id,
    },
  });

  /* -------------------------------------------------------------------------- */
  /*                                   BADGES                                   */
  /* -------------------------------------------------------------------------- */
  const badgeUser1 = await prisma.badge.create({
    data: {
      name: "First Event",
      description: "Registered for your first event.",
    },
  });

  const badgeUser2 = await prisma.badge.create({
    data: {
      name: "5 Events",
      description: "Attended 5 events.",
    },
  });

  const badgeUser3 = await prisma.badge.create({
    data: {
      name: "10 Events",
      description: "Attended 10 events.",
    },
  });

  const badgeUser4 = await prisma.badge.create({
    data: {
      name: "20 Events",
      description: "Attended 20 events.",
    },
  });

  const badgeUser5 = await prisma.badge.create({
    data: {
      name: "Event Reviewer",
      description: "Left a review for an event.",
    },
  });

  const badgeOrganizer1 = await prisma.badge.create({
    data: {
      name: "First Event Created",
      description: "Created your first event.",
    },
  });

  const badgeOrganizer2 = await prisma.badge.create({
    data: {
      name: "100 Tickets Sold",
      description: "Sold 100 tickets for your events.",
    },
  });

  const badgeOrganizer3 = await prisma.badge.create({
    data: {
      name: "500 Tickets Sold",
      description: "Sold 500 tickets for your events.",
    },
  });
  const badgeOrganizer4 = await prisma.badge.create({
    data: {
      name: "1000 Tickets Sold",
      description: "Sold 1000 tickets for your events.",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
  
async function seed() {
  try {
    await prisma.coupon.deleteMany();
    await prisma.wallet.deleteMany();
    await prisma.order.deleteMany();
    await prisma.event.deleteMany();
    await prisma.points.deleteMany();
    await prisma.user.deleteMany();

    /* -------------------------------------------------------------------------- */
    /*                                 Create User                                */
    /* -------------------------------------------------------------------------- */
    const salt = await genSalt(10);
    const user1 = await prisma.user.create({
      data: {
        fullname: "Erlangga Adi Prasetya",
        email: "erlangga@mail.com",
        password: "newpass",
        role: "CUSTOMER",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        fullname: "Rizky Maulana",
        email: "rizky@mail.com",
        password: await bcrypt.hash("password", 10),
        role: "CUSTOMER",
      },
    });

    const user3 = await prisma.user.create({
      data: {
        fullname: "Siti Aisyah",
        email: "aisyah@mail.com",
        password: "secure123",
        role: "CUSTOMER",
      },
    });

    const user4 = await prisma.user.create({
      data: {
        fullname: "Budi Santoso",
        email: "budi@mail.com",
        password: "mypassword",
        role: "CUSTOMER",
      },
    });

    const user5 = await prisma.user.create({
      data: {
        fullname: "Dian Permata",
        email: "dian@mail.com",
        password: "pass456",
        role: "CUSTOMER",
      },
    });

    const user6 = await prisma.user.create({
      data: {
        fullname: "Arif Setiawan",
        email: "arif@mail.com",
        password: "secret789",
        role: "CUSTOMER",
      },
    });

    const user7 = await prisma.user.create({
      data: {
        fullname: "Nina Lestari",
        email: "nina@mail.com",
        password: "hello123",
        role: "CUSTOMER",
      },
    });

    const user8 = await prisma.user.create({
      data: {
        fullname: "Fajar Nugroho",
        email: "fajar@mail.com",
        password: "qwerty123",
        role: "CUSTOMER",
      },
    });

    const user9 = await prisma.user.create({
      data: {
        fullname: "Indra Wijaya",
        email: "indra@mail.com",
        password: "letmein",
        role: "CUSTOMER",
      },
    });

    const user10 = await prisma.user.create({
      data: {
        fullname: "Yulia Rahma",
        email: "yulia@mail.com",
        password: "welcome1",
        role: "CUSTOMER",
      },
    });

    // Data untuk organizerId
    const user11 = await prisma.user.create({
      data: {
        fullname: "Andi Saputra",
        email: "andi@mail.com",
        password: await bcrypt.hash("password", salt),
        role: "ORGANIZER",
      },
    });

    const user12 = await prisma.user.create({
      data: {
        fullname: "Citra Melati",
        email: "citra@mail.com",
        password: "organizerId2",
        role: "ORGANIZER",
      },
    });

    const user13 = await prisma.user.create({
      data: {
        fullname: "Hendro Pranoto",
        email: "hendro@mail.com",
        password: "organizerId3",
        role: "ORGANIZER",
      },
    });

    /* -------------------------------------------------------------------------- */
    /*                                Create Wallet                               */
    /* -------------------------------------------------------------------------- */

    const walletUser2 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user2.id,
      },
    });

    const walletUser3 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user3.id,
      },
    });

    const walletUser4 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user4.id,
      },
    });

    const walletUser5 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user5.id,
      },
    });

    const walletUser6 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user6.id,
      },
    });

    const walletUser7 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user7.id,
      },
    });

    const walletUser8 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user8.id,
      },
    });

    const walletUser9 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user9.id,
      },
    });

    const walletUser10 = await prisma.wallet.create({
      data: {
        credit: 1_000_000,
        userId: user10.id,
      },
    });

    /* -------------------------------------------------------------------------- */
    /*                                Create Coupon                               */
    /* -------------------------------------------------------------------------- */
    const coupon1 = await prisma.coupon.create({
      data: {
        code: "123ABC",
        discount: 10,
        userId: user1.id,
        expirationDate: new Date(),
      },
    });

    /* -------------------------------------------------------------------------- */
    /*                                Create Event                                */
    /* -------------------------------------------------------------------------- */

    // ==== EVENT GENRE ROCK ====
    // ==== EVENT GENRE ROCK ====
    const rockEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Membangun & Menghancurkan - .Feast",
        genre: "ROCK",
        date: "2025-05-31T10:00:00.000Z",
        place: "Veledrome",
        ticketSlot: 10000,
        prices: 250_000,

        organizer: ".Feast", // Menambahkan kolom organizer

        organizerId: 11,

        description:
          "Konser spesial album terbaru dari .Feast yang akan membawa penonton dalam perjalanan musik penuh energi dan pesan mendalam. Album 'Membangun & Menghancurkan' menghadirkan konsep baru yang kuat dengan lirik-lirik yang penuh makna, menggugah, dan berani. Di Veledrome, para penggemar akan disuguhkan dengan aksi panggung luar biasa yang memadukan kekuatan musik rock dengan visual yang mendalam, serta tata panggung yang megah. Jangan lewatkan kesempatan untuk menyaksikan .Feast membawakan lagu-lagu terbaru mereka dan merasakan setiap emosi yang disampaikan lewat musik!",
        eventType: "PAID",
      },
    });

    // ==== EVENT GENRE ROCK ====
    const rockEvents = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Membangun & Menghancurkan & ngehe - .Feast",
        genre: "ROCK",
        date: "2025-05-31T10:00:00.000Z",
        place: "Veledrome",
        ticketSlot: 10000,
        prices: 250_000,
        organizerId: 11,
        description:
          "Konser spesial album terbaru dari .Fiesta yang akan membawa penonton dalam perjalanan musik penuh energi dan pesan mendalam. Album 'Membangun & Menghancurkan' menghadirkan konsep baru yang kuat dengan lirik-lirik yang penuh makna, menggugah, dan berani. Di Veledrome, para penggemar akan disuguhkan dengan aksi panggung luar biasa yang memadukan kekuatan musik rock dengan visual yang mendalam, serta tata panggung yang megah. Jangan lewatkan kesempatan untuk menyaksikan .Feast membawakan lagu-lagu terbaru mereka dan merasakan setiap emosi yang disampaikan lewat musik!",
        eventType: "PAID",
      },
    });

    const rockEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Slank - Rock Never Dies",
        genre: "ROCK",
        date: "2025-07-20T18:30:00.000Z",
        place: "Istora Senayan",
        ticketSlot: 10000,
        prices: 300_000,

        organizer: "Slank", // Menambahkan kolom organizer
        description:
          "Konser spesial dari Slank dengan hits legendaris yang telah menemani perjalanan musik Indonesia selama bertahun-tahun. 'Rock Never Dies' akan membawa Anda merasakan kembali momen-momen tak terlupakan melalui lagu-lagu ikonik Slank yang penuh energi. Di Istora Senayan, ribuan penggemar akan berkumpul untuk menyanyikan bersama setiap lirik yang sudah menjadi bagian dari sejarah musik rock Indonesia. Dengan panggung megah dan tata suara yang luar biasa, konser ini akan menjadi pengalaman yang tak bisa dilewatkan oleh para Slanker sejati!",
        eventType: "PAID",
      },
    });

    const rockEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Burgerkill - Headbanger Night",
        genre: "ROCK",
        date: "2025-09-05T20:00:00.000Z",
        place: "The Pallas",
        ticketSlot: 10000,
        prices: 250_000,

        organizer: "Burgerkill", // Menambahkan kolom organizer

        organizerId: 11,

        description:
          "Malam penuh headbang dengan Burgerkill! Konser ini akan membawa Anda menyelami dunia metal yang keras dan penuh kekuatan dengan salah satu band metal terbesar Indonesia. Burgerkill akan membawakan lagu-lagu mereka yang sudah menjadi anthem bagi para metalhead sejati. Di The Pallas, para penonton akan disuguhkan pengalaman musik yang intens dengan energi yang tak terbendung, serta penampilan panggung yang memukau dan menegangkan. Bersiaplah untuk merasakan adrenalin yang meluap dan terlibat dalam euforia headbang tanpa henti!",
        eventType: "PAID",
      },
    });

    const rockEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Superman Is Dead - Bali Rockin'",
        genre: "ROCK",
        date: "2025-08-15T19:30:00.000Z",
        place: "Bali Beach Club",
        ticketSlot: 10000,
        prices: 280_000,
        organizer: "Superman Is Dead", // Menambahkan kolom organizer
        description:
          "Konser rock terbaik dari Bali! Superman Is Dead (SID) kembali dengan penampilan spesial yang akan memanjakan para penggemar mereka di Bali. 'Bali Rockin'' adalah sebuah pesta musik yang akan mengguncang pantai dengan suara keras dan penuh semangat. Di Bali Beach Club, para penonton akan merasakan pengalaman rock yang tak terlupakan dengan suasana tropis yang menyatu dengan musik. Dapatkan kesempatan untuk menikmati lagu-lagu terbaik SID yang sudah menjadi simbol gerakan rock di Indonesia, sambil merasakan kehangatan atmosfer Bali yang ikonik!",
        eventType: "PAID",
      },
    });

    const rockEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Rock Fest 2025",
        genre: "ROCK",
        date: "2025-06-10T19:00:00.000Z",
        place: "Stadion GBK",
        ticketSlot: 10000,
        prices: 350_000,

        organizer: "Rock Fest", // Menambahkan kolom organizer
        description:
          "Festival musik rock terbesar tahun ini! Rock Fest 2025 akan menyatukan berbagai band rock ternama dari dalam dan luar negeri dalam satu panggung megah di Stadion GBK. Para penggemar akan merasakan euforia musik yang tak terbendung, dengan deretan penampilan spektakuler yang akan mengguncang setiap sudut stadion. Dengan berbagai genre rock yang berbeda, mulai dari classic rock hingga metal, Rock Fest 2025 akan menjadi pesta musik yang penuh dengan energi, kegembiraan, dan kenangan tak terlupakan. Jangan lewatkan kesempatan untuk menjadi bagian dari festival terbesar dalam dunia musik rock Indonesia!",
        eventType: "PAID",
      },
    });

    // ==== EVENT GENRE JAZZ ====
    const jazzEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Jakarta International Jazz Festival",
        genre: "JAZZ",
        date: "2025-07-10T18:00:00.000Z",
        place: "JIExpo Kemayoran",
        ticketSlot: 10000,
        prices: 500_000,
        organizerId: 13,
        description:
          "Festival Jazz terbesar di Indonesia yang menghadirkan musisi internasional dari berbagai penjuru dunia. Jakarta International Jazz Festival akan menyuguhkan pengalaman luar biasa dengan berbagai penampilan spektakuler dari para jazz legend dan musisi muda berbakat. Di JIExpo Kemayoran, festival ini akan menggabungkan berbagai genre jazz, mulai dari tradisional hingga kontemporer, dalam suasana yang penuh energi dan kehangatan. Jangan lewatkan kesempatan untuk menyaksikan aksi panggung yang memukau dan menikmati malam penuh musik berkualitas tinggi!",
        eventType: "PAID",
      },
    });

    const jazzEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Tohpati & Friends - A Night of Jazz",
        genre: "JAZZ",
        date: "2025-08-12T20:00:00.000Z",
        place: "Bentara Budaya",
        ticketSlot: 10000,
        prices: 200_000,
        organizerId: 12,
        description:
          "Tohpati, gitaris jazz ternama Indonesia, akan menghadirkan malam penuh nuansa jazz yang menenangkan dan mendalam bersama para musisi handal lainnya. 'A Night of Jazz' di Bentara Budaya akan membawa penonton dalam alunan musik jazz yang lembut namun penuh ekspresi. Tophati & Friends akan memainkan komposisi yang membawa sentuhan jazz fusion yang elegan, dengan improvisasi dan harmoni yang indah. Nikmati setiap notasi yang mengalun dengan indah, dan rasakan suasana intim yang akan membuat malam ini tak terlupakan!",
        eventType: "PAID",
      },
    });

    const jazzEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Dewa Bujana - Jazz Night",
        genre: "JAZZ",
        date: "2025-09-05T19:30:00.000Z",
        place: "Taman Ismail Marzuki",
        ticketSlot: 10000,
        prices: 250_000,
        organizerId: 11,
        description:
          "Malam eksklusif bersama Dewa Bujana dalam alunan jazz yang syahdu dan memukau. Dewa Bujana, gitaris jazz yang telah mendunia, akan membawakan komposisi-komposisi terbaiknya dalam suasana yang sangat intim di Taman Ismail Marzuki. Konser ini akan menggabungkan improvisasi jazz yang khas dengan teknik permainan gitar yang memukau, menghadirkan pengalaman musikal yang mendalam dan penuh nuansa. Bersiaplah untuk terhanyut dalam setiap melodi yang mengalun dengan indah dan membawa Anda dalam perjalanan musikal yang tak terlupakan!",
        eventType: "PAID",
      },
    });

    const jazzEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Chill Jazz Weekend",
        genre: "JAZZ",
        date: "2025-10-20T17:00:00.000Z",
        place: "La Piazza",
        ticketSlot: 10000,
        prices: 180_000,
        organizerId: 11,
        description:
          "Akhir pekan santai dengan lantunan jazz yang menenangkan di La Piazza. 'Chill Jazz Weekend' akan menghadirkan penampilan-penampilan jazz yang lebih santai, penuh relaksasi, dan cocok untuk dinikmati sambil menikmati suasana akhir pekan yang tenang. Dengan latar belakang suasana La Piazza yang nyaman dan santai, acara ini adalah pilihan sempurna bagi Anda yang ingin bersantai sambil menikmati alunan musik jazz yang menenangkan hati. Jangan lewatkan kesempatan untuk menikmati musik berkualitas dalam suasana yang hangat dan akrab!",
        eventType: "PAID",
      },
    });

    const jazzEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Indonesian Jazz Legends",
        genre: "JAZZ",
        date: "2025-11-12T20:00:00.000Z",
        place: "Balai Sarbini",
        ticketSlot: 10000,
        prices: 300_000,
        organizerId: 12,
        description:
          "Pertemuan para legenda jazz Indonesia dalam satu panggung spektakuler yang akan menghadirkan kolaborasi langka antara musisi jazz terbaik Tanah Air. 'Indonesian Jazz Legends' di Balai Sarbini akan menghadirkan penampilan dari musisi jazz yang telah membentuk sejarah musik Indonesia, dengan kombinasi gaya dan teknik yang khas. Saksikan aksi panggung yang penuh emosi, improvisasi, dan harmoni luar biasa, serta rasakan aura magis dari setiap lagu yang dibawakan. Ini adalah kesempatan langka untuk menyaksikan kehebatan para legenda jazz Indonesia dalam satu malam penuh keajaiban musikal!",
        eventType: "PAID",
      },
    });

    // ==== EVENT GENRE POP ====
    // ==== EVENT GENRE POP ====
    const popEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Raisa Live in Concert",
        genre: "POP",
        date: "2025-09-25T19:30:00.000Z",
        place: "Istora Senayan",
        ticketSlot: 10000,
        prices: 400_000,
        organizer: "Raisa Management", // Menambahkan kolom organizer
        description:
          "Konser megah dari Raisa yang akan membawa para penggemar dalam perjalanan musik penuh emosi dan nostalgia melalui lagu-lagu terbaik dari album-album sebelumnya. " +
          "Dari perjalanan kariernya yang telah menemani banyak momen, Raisa kembali ke panggung besar dengan aransemen musik yang lebih kaya dan tata panggung yang spektakuler. " +
          "Di Istora Senayan, penonton akan disuguhkan pengalaman luar biasa dengan efek visual yang memukau dan pencahayaan dramatis yang menambah kehangatan suasana. " +
          "Bersiaplah untuk menikmati setiap lirik dengan penuh perasaan dan merasakan euforia bersama ribuan penggemar lainnya dalam konser yang tak terlupakan!",
        eventType: "PAID",
      },
    });

    const popEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Afgan Exclusive Showcase",
        genre: "POP",
        date: "2025-10-10T20:00:00.000Z",
        place: "Balai Sarbini",
        ticketSlot: 10000,
        prices: 350_000,
        organizer: "Afgan Management", // Menambahkan kolom organizer
        description:
          "Malam istimewa bersama Afgan dalam konser eksklusif yang akan membawa Anda ke dalam perjalanan penuh emosi melalui lagu-lagu hitsnya. " +
          "Dari balada penuh perasaan hingga lagu-lagu upbeat yang menggugah semangat, Afgan siap menyuguhkan penampilan yang tak terlupakan. " +
          "Dengan dukungan tata panggung megah dan pencahayaan yang dramatis, konser ini akan menghadirkan pengalaman musik pop terbaik bagi para penggemar. " +
          "Jangan lewatkan kesempatan langka untuk menikmati suara khas Afgan dalam suasana yang lebih intim dan spesial!",
        eventType: "PAID",
      },
    });

    const popEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Mahalini - Love & Harmony",
        genre: "POP",
        date: "2025-11-15T19:00:00.000Z",
        place: "Tennis Indoor Senayan",
        ticketSlot: 10000,
        prices: 300_000,
        organizer: "Mahalini Management", // Menambahkan kolom organizer
        description:
          "Bersiaplah untuk malam penuh kehangatan dan harmoni dalam konser spesial Mahalini. " +
          "Dikenal dengan suara merdunya dan lirik-lirik yang penuh makna, Mahalini akan membawakan lagu-lagu terbaiknya dalam suasana yang romantis dan menyentuh hati. " +
          "Konser ini akan menjadi pengalaman musik yang tak hanya menghibur, tetapi juga membawa perasaan mendalam bagi setiap penontonnya. " +
          "Jangan sampai melewatkan momen spesial ini, di mana musik dan emosi berpadu dalam satu kesempurnaan.",
        eventType: "PAID",
      },
    });

    const popEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Tulus - Manusia Tour",
        genre: "POP",
        date: "2025-12-05T18:30:00.000Z",
        place: "JCC Senayan",
        ticketSlot: 10000,
        prices: 450_000,
        organizer: "Tulus Management", // Menambahkan kolom organizer
        description:
          "Tur konser Tulus kembali hadir dengan membawakan lagu-lagu dari album 'Manusia', serta deretan hits yang telah menjadi favorit para penggemar. " +
          "Dikenal dengan suara lembut dan lirik-lirik yang puitis, Tulus akan menghadirkan pertunjukan yang membawa perasaan hangat dan reflektif. " +
          "Dengan aransemen musik yang kaya dan panggung yang dirancang secara artistik, konser ini akan menjadi pengalaman yang mengesankan bagi setiap penontonnya. " +
          "Nikmati malam penuh inspirasi bersama Tulus dan biarkan musiknya menyentuh hati Anda.",
        eventType: "PAID",
      },
    });

    const popEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "NOAH - Nostalgia Pop",
        genre: "POP",
        date: "2026-01-20T19:30:00.000Z",
        place: "Stadion GBK",
        ticketSlot: 10000,
        prices: 500_000,
        organizer: "NOAH Management", // Menambahkan kolom organizer
        description:
          "Konser spektakuler dari NOAH yang akan membawa para penggemar dalam perjalanan nostalgia melalui lagu-lagu legendaris mereka. " +
          "Dari era Peterpan hingga transformasi menjadi NOAH, band ini terus menghadirkan karya-karya luar biasa yang menggugah perasaan. " +
          "Di Stadion GBK, penonton akan disuguhkan pertunjukan megah dengan tata panggung futuristik dan sound system berkualitas tinggi. " +
          "Bersiaplah untuk menyanyikan setiap lirik bersama ribuan penggemar lainnya dalam malam yang penuh kenangan dan euforia!",
        eventType: "PAID",
      },
    });

    // ==== EVENT GENRE INDIE ====
    // ==== EVENT GENRE INDIE ====
    const indieEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Fourtwnty - Live Acoustic",
        genre: "INDIE",
        date: "2025-11-15T19:00:00.000Z",
        place: "Cafe Mondo",
        ticketSlot: 10000,
        prices: 150_000,
        organizer: "Fourtwnty Management", // Menambahkan kolom organizer
        description:
          "Bergabunglah bersama kami dalam 'Fourtwnty - Live Acoustic' di Cafe Mondo, sebuah malam penuh musik akustik yang santai dan intim. Fourtwnty, band indie yang dikenal dengan lagu-lagu yang menenangkan dan lirik penuh makna, akan membawakan hits terbaik mereka dengan sentuhan akustik yang lebih mendalam. Suasana cafe yang hangat dan akrab akan menciptakan pengalaman yang lebih personal, memungkinkan penonton untuk merasakan kedekatan dengan musik yang dibawakan. \n\n" +
          "Dari lagu-lagu mellow hingga yang lebih upbeat, konser ini akan menyajikan perjalanan musikal yang penuh perasaan. Setiap alunan gitar dan vokal khas Fourtwnty akan menggugah hati dan membawa penonton masuk ke dalam dunia musik mereka. Bagi Anda yang mencari pengalaman musik yang lebih intimate, akustik, dan penuh emosi, acara ini adalah pilihan yang sempurna. Jangan lewatkan kesempatan untuk menikmati malam santai penuh dengan musik indie berkualitas di salah satu tempat paling nyaman di kota.",
        eventType: "PAID",
      },
    });

    const indieEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Payung Teduh - A Beautiful Night",
        genre: "INDIE",
        date: "2025-12-10T19:30:00.000Z",
        place: "Taman Ismail Marzuki",
        ticketSlot: 10000,
        prices: 180_000,
        organizer: "Payung Teduh Management", // Menambahkan kolom organizer
        description:
          "Nikmati malam penuh melodi lembut dari Payung Teduh dalam 'A Beautiful Night'. Konser ini akan membawa penonton menikmati musik indie dengan suasana yang intim dan santai. Dengan alunan gitar akustik dan vokal khas, Payung Teduh akan membawakan lagu-lagu hits mereka dalam format akustik yang menghangatkan hati. Suasana yang tenang dan penuh perasaan akan membuat malam ini menjadi momen yang tak terlupakan.",
        eventType: "PAID",
      },
    });

    const indieEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: ".Feast - The Acoustic Sessions",
        genre: "INDIE",
        date: "2025-12-15T20:00:00.000Z",
        place: "Blok M Square",
        ticketSlot: 10000,
        prices: 200_000,
        organizer: ".Feast Management", // Menambahkan kolom organizer
        description:
          "Dengarkan karya terbaik .Feast dalam 'The Acoustic Sessions' yang mengubah suasana lagu-lagu mereka menjadi lebih intim. Di Blok M Square, para penggemar dapat merasakan setiap lirik dan melodi dengan lebih dekat dalam format akustik yang lebih mendalam. Dengan suasana yang santai dan hangat, konser ini menjadi kesempatan sempurna untuk merasakan musik .Feast dari sisi yang berbeda, lebih personal, dan lebih emosional.",
        eventType: "PAID",
      },
    });

    const indieEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "The Overtunes - Indie Acoustic Night",
        genre: "INDIE",
        date: "2025-12-20T19:30:00.000Z",
        place: "Parker’s Coffee House",
        ticketSlot: 10000,
        prices: 160_000,
        organizer: "The Overtunes Management", // Menambahkan kolom organizer
        description:
          "Malam penuh musik akustik dari The Overtunes di 'Indie Acoustic Night' yang akan mengajak penonton untuk menikmati penampilan yang lebih sederhana namun penuh emosi. Dengan suasana yang nyaman dan akrab, The Overtunes akan membawakan lagu-lagu hits mereka dalam versi akustik yang akan membawa penonton terhanyut dalam setiap melodi. Sebuah malam yang sempurna untuk menikmati musik indie berkualitas dalam suasana yang hangat dan menyenangkan.",
        eventType: "PAID",
      },
    });

    const indieEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Ruang Sentuh - Acoustic Journey",
        genre: "INDIE",
        date: "2025-12-25T20:00:00.000Z",
        place: "Kafe Indie Space",
        ticketSlot: 10000,
        prices: 170_000,
        organizer: "Ruang Sentuh Management", // Menambahkan kolom organizer
        description:
          "Ruang Sentuh mengundang Anda untuk bergabung dalam 'Acoustic Journey' yang membawa pengalaman musikal yang lebih personal dan penuh perasaan. Dalam suasana akustik yang hangat di Kafe Indie Space, penonton akan dimanjakan dengan alunan musik yang menenangkan hati. Setiap lagu akan dibawakan dengan sentuhan yang lebih mendalam, membawa para penggemar untuk merasakan setiap nuansa musik yang dibawakan oleh Ruang Sentuh. Sebuah malam yang penuh keindahan dan ketenangan!",
        eventType: "PAID",
      },
    });

    // ==== EVENT GENRE EDM ====
    // ==== EVENT GENRE EDM ====
    const edmEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "DWP 2025",
        genre: "EDM",
        date: "2025-12-30T22:00:00.000Z",
        place: "JIExpo Kemayoran",
        ticketSlot: 10000,
        prices: 800_000,
        organizer: "DWP Management", // Menambahkan kolom organizer
        description: "Festival EDM terbesar di Indonesia dengan DJ dunia!",
        eventType: "PAID",
      },
    });

    const edmEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Sensation Jakarta 2025",
        genre: "EDM",
        date: "2025-11-15T21:00:00.000Z",
        place: "Gelora Bung Karno Stadium",
        ticketSlot: 10000,
        prices: 900_000,
        organizer: "Sensation Management", // Menambahkan kolom organizer
        description:
          "Sensation Jakarta kembali hadir dengan pengalaman EDM yang luar biasa! Dikenal dengan pertunjukan panggung spektakuler dan DJ dunia, Sensation 2025 akan membawa penonton ke dalam dunia yang penuh energi dan cahaya. Dengan tema unik yang akan disajikan dalam setiap edisi, festival ini menghadirkan suasana yang menggabungkan musik elektronik dengan visual yang memukau. Jangan lewatkan kesempatan untuk menjadi bagian dari pengalaman luar biasa ini dan merasakan euforia musik EDM dengan ribuan penggemar lainnya!",
        eventType: "PAID",
      },
    });

    const edmEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Ultra Music Festival - Indonesia 2025",
        genre: "EDM",
        date: "2025-09-10T22:00:00.000Z",
        place: "Stadion GBK",
        ticketSlot: 10000,
        prices: 850_000,
        organizer: "Ultra Music Festival Management", // Menambahkan kolom organizer
        description:
          "Festival Ultra Music kembali ke Indonesia dengan pengalaman musik EDM yang penuh energi dan semangat! Dengan lineup DJ internasional yang sangat dinanti, Ultra Music Festival Indonesia 2025 akan menghidupkan Stadion GBK dengan musik yang memukau dan pertunjukan panggung yang megah. Para penggemar akan dibawa dalam perjalanan euforia melalui berbagai genre EDM, mulai dari house, techno, hingga dubstep. Dapatkan tiketmu sekarang dan bersiaplah untuk malam yang tak terlupakan!",
        eventType: "PAID",
      },
    });

    const edmEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Tomorrowland Jakarta 2025",
        genre: "EDM",
        date: "2025-10-05T22:00:00.000Z",
        place: "Ancol Beach City",
        ticketSlot: 10000,
        prices: 950_000,
        organizer: "Tomorrowland Management", // Menambahkan kolom organizer
        description:
          "The world’s biggest electronic dance music festival is coming to Jakarta! Tomorrowland 2025 will take over Ancol Beach City, bringing together top DJs and artists from around the world for an unforgettable EDM experience. The festival will feature multiple stages, immersive visuals, and a lineup that includes the biggest names in the EDM scene. Prepare to lose yourself in the music, lights, and energy of Tomorrowland, and be part of a global celebration of music and unity!",
        eventType: "PAID",
      },
    });

    const edmEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Creamfields Indonesia 2025",
        genre: "EDM",
        date: "2025-08-25T23:00:00.000Z",
        place: "Jakarta International Expo",
        ticketSlot: 10000,
        prices: 750_000,
        organizer: "Creamfields Management", // Menambahkan kolom organizer
        description:
          "Creamfields Indonesia 2025 is bringing the ultimate EDM experience to Jakarta! Known for its high-energy performances and stunning production, Creamfields is one of the biggest names in the global EDM scene. With an incredible lineup of DJs, this festival promises to deliver the best of house, techno, and trance music. Immerse yourself in the electrifying atmosphere, surrounded by thousands of EDM fans, and experience an unforgettable night of music and lights!",
        eventType: "PAID",
      },
    });

    const edmEvent6 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/sample_edm.jpeg",
        name: "Ultra Music Festival - Bali",
        genre: "EDM",
        date: "2025-12-15T18:00:00.000Z",
        place: "Finns Beach Club, Bali",
        ticketSlot: 15000,
        prices: 0, // Gratis
        organizerId: 11,
        description:
          "Ultra Music Festival akhirnya hadir di Bali! Bersiaplah untuk pengalaman musik elektronik terbesar dengan DJ kelas dunia, efek visual spektakuler, dan atmosfer pantai yang epik. Bergabunglah dengan ribuan pencinta EDM dari seluruh dunia dan rasakan pengalaman festival tak terlupakan di pulau surga!",
        eventType: "FREE",
      },
    });

    // ==== EVENT GENRE HIP-HOP ====
    const hiphopEvent1 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Rich Brian - 88Rising Tour",
        genre: "HIP_HOP",
        date: "2025-06-18T20:30:00.000Z",
        place: "The Pallas",
        ticketSlot: 10000,
        prices: 500_000,
        organizer: "",
        description:
          "Rich Brian kembali ke tanah air dengan tur eksklusifnya, '88Rising Tour', yang akan menggebrak panggung dengan energi luar biasa! Setelah meraih kesuksesan global melalui lagu-lagu hitnya seperti 'Dat $tick' dan 'Yellow', Rich Brian siap memberikan pengalaman musik yang tak terlupakan bagi penggemar di Indonesia. Dalam tur ini, ia akan membawakan lagu-lagu favorit dari albumnya yang telah mendunia, termasuk beberapa kejutan spesial yang hanya bisa Anda saksikan langsung. \n\n" +
          "Tur ini bukan sekadar konser, tapi sebuah perayaan perjalanan musik Brian dari Jakarta ke dunia internasional. Dengan gaya yang unik, Rich Brian akan menyuguhkan penampilan live yang penuh semangat, dengan dukungan visual dan pencahayaan yang spektakuler. Jika Anda penggemar hip-hop dan musik yang inovatif, konser ini adalah kesempatan langka untuk melihat Rich Brian tampil di hadapan Anda dengan energi penuh di The Pallas. Jangan lewatkan kesempatan untuk bergabung dalam euforia musik yang akan mengguncang Jakarta!",
        eventType: "PAID",
      },
    });

    const hiphopEvent2 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Raisa & Friends - Hip Hop Night",
        genre: "HIP_HOP",
        date: "2025-07-22T20:00:00.000Z",
        place: "Istora Senayan",
        ticketSlot: 10000,
        prices: 400_000,
        organizer: "",
        description:
          "Raisa dan teman-teman kembali ke panggung dengan kolaborasi genre hip-hop yang penuh kejutan! Dalam 'Hip Hop Night', Anda akan menyaksikan penampilan luar biasa dari Raisa yang berkolaborasi dengan beberapa musisi hip-hop ternama. Nikmati atmosfer yang penuh energi dengan beat yang menghentak dan lirik yang mengalir. Konser ini akan membawa Anda dalam perjalanan musikal yang tak terlupakan dengan perpaduan suara yang segar dan penuh semangat!",
        eventType: "PAID",
      },
    });

    const hiphopEvent3 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Wiz Khalifa - The Smoke Tour",
        genre: "HIP_HOP",
        date: "2025-08-05T21:00:00.000Z",
        place: "Stadion GBK",
        ticketSlot: 10000,
        prices: 600_000,
        organizer: "",
        description:
          "Wiz Khalifa kembali untuk menggebrak Jakarta dengan 'The Smoke Tour'! Saksikan penampilan spektakuler dari rapper internasional ini yang telah mendunia dengan hits seperti 'See You Again' dan 'Young, Wild & Free'. Acara ini akan disuguhkan dengan visual yang luar biasa, pertunjukan panggung yang megah, dan tentu saja, musik yang membakar semangat. Bergabunglah dalam suasana penuh energi dan euforia bersama Wiz Khalifa dan penggemarnya!",
        eventType: "PAID",
      },
    });

    const hiphopEvent4 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "Travis Scott - Utopia Tour",
        genre: "HIP_HOP",
        date: "2025-09-10T22:00:00.000Z",
        place: "Gelora Bung Karno Stadium",
        ticketSlot: 10000,
        prices: 700_000,
        organizer: "",
        description:
          "Travis Scott membawa tur 'Utopia' ke Jakarta! Nikmati malam penuh dengan pengalaman visual yang mendalam dan musik yang menghentak dari rapper, produser, dan inovator ini. Dengan lagu-lagu hits seperti 'SICKO MODE' dan 'Goosebumps', Travis Scott akan membuat setiap detik di konser ini terasa intens. Di Gelora Bung Karno Stadium, Anda akan merasakan atmosfer yang luar biasa dengan penampilan panggung yang futuristik dan penuh kejutan. Bersiaplah untuk merasakan energi yang tak tertandingi!",
        eventType: "PAID",
      },
    });

    const hiphopEvent5 = await prisma.event.create({
      data: {
        image:
          "https://assets.loket.com/neo/production/images/banner/zDlVh_1738331348885958.jpeg",
        name: "A$AP Rocky - Live in Jakarta",
        genre: "HIP_HOP",
        date: "2025-10-02T23:00:00.000Z",
        place: "The Pallas",
        ticketSlot: 10000,
        prices: 550_000,
        organizer: "",
        description:
          "A$AP Rocky hadir untuk menggebrak Jakarta dengan 'Live in Jakarta'. Konser ini akan membawa Anda dalam perjalanan musik penuh dengan gaya, lirik tajam, dan beat yang menghentak. Dengan penampilan megah, A$AP Rocky akan membawakan lagu-lagu favorit dari albumnya yang telah mendunia, seperti 'Praise the Lord' dan 'L$D'. Tidak hanya musik, tapi visual dan atmosfer yang tercipta juga akan membuat Anda merasakan sensasi yang unik dari rapper ikonik ini. Bergabunglah dalam acara ini untuk merasakan langsung gaya hidup dan musik A$AP Rocky!",
        eventType: "PAID",
      },
    });

    /* -------------------------------------------------------------------------- */
    /*                                Create Order                                */
    /* -------------------------------------------------------------------------- */
    const eventPrices = {
      1: 250000,
      2: 250000,
      3: 300000,
      4: 250000,
      5: 280000,
      6: 350000,
      7: 500000,
      8: 200000,
      9: 250000,
      10: 180000,
      11: 300000,
      12: 400000,
      13: 350000,
      14: 300000,
      15: 450000,
      16: 500000,
      17: 150000,
      18: 180000,
      19: 200000,
      20: 160000,
      21: 170000,
      22: 800000,
      23: 900000,
      24: 850000,
      25: 950000,
      26: 750000,
      27: 0,
      28: 500000,
      29: 400000,
      30: 600000,
    };

    const orders = Array.from({ length: 1000 }, () => {
      const eventId = Math.floor(Math.random() * 30) + 1;
      const userId = Math.floor(Math.random() * 10) + 1;

      return {
        totalPrice: eventPrices[eventId],
        totalTicket: 1,
        userId,
        eventId,
        createdAt: new Date(
          Date.now() - Math.floor(Math.random() * 31536000000)
        ),
      };
    });

    await prisma.$transaction(async (prisma) => {
      await prisma.order.createMany({ data: orders });

      for (const order of orders) {
        await prisma.event.update({
          where: { id: order.eventId },
          data: {
            ticketSold: { increment: order.totalTicket },
            ticketSlot: { decrement: order.totalTicket },
          },
        });
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
