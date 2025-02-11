import { PrismaClient } from "@prisma/client";

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
      location: "New York",
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
      location: "Los Angeles",
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
      location: "San Francisco",
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
      location: "Paris",
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
      location: "Berlin",
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
        "https://images.unsplash.com/photo-1555685812-4b7432b8b8a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      location: "Tokyo",
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
      location: "Silicon Valley",
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
      location: "Rome",
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
  const Hobbies = await prisma.categoriess.create({
    data: {
      name: "Food",
      preview: "Lorem ipsum",
      imageURL:
        "https://images.unsplash.com/photo-1736613403120-8d48aebd29e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });

  /* -------------------------------------------------------------------------- */
  /*                                  FEEDBACK                                  */
  /* -------------------------------------------------------------------------- */

  const coolFeedback = await prisma.feedback.create({
    data: {
      comments: "WAAAWW, gila keren banget coi",
      ratings: 5,
      suggestions: "gak ada sih cuma semoga lebih gacor lagi ygy",
      userId: user1.id,
      eventId: event1.id,
    },
  });

  const amazingFeedback = await prisma.feedback.create({
    data: {
      comments: "Wow, this is absolutely amazing!",
      ratings: 5,
      suggestions: "Nothing much, just keep up the great work!",
      userId: user1.id,
      eventId: event2.id,
    },
  });

  const impressiveFeedback = await prisma.feedback.create({
    data: {
      comments: "Really impressive! I love the effort put into this.",
      ratings: 4,
      suggestions: "Maybe some minor improvements in responsiveness.",
      userId: user1.id,
      eventId: event3.id,
    },
  });

  const disappointingFeedback = await prisma.feedback.create({
    data: {
      comments: "This was honestly disappointing. I expected more.",
      ratings: 2,
      suggestions: "The UI feels outdated, and the performance is sluggish.",
      userId: user1.id,
      eventId: event4.id,
    },
  });

  const terribleFeedback = await prisma.feedback.create({
    data: {
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
    console.error(error);
    await prisma.$disconnect();
  });
