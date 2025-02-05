import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const badgeCriteria = {
  FIRST_EVENT_REGISTRATION: {
    name: "First Event Registration",
    description: "Registered for the first event.",
    condition: (user: any) => user.orders.length >= 1,
  },
  FIVE_EVENTS_ATTENDED: {
    name: "5 Events Attended",
    description: "Attended 5 events.",
    condition: (user: any) => user.orders.length >= 5,
  },
  TEN_EVENTS_ATTENDED: {
    name: "10 Events Attended",
    description: "Attended 10 events.",
    condition: (user: any) => user.orders.length >= 10,
  },
  TWENTY_EVENTS_ATTENDED: {
    name: "20 Events Attended",
    description: "Attended 20 events.",
    condition: (user: any) => user.orders.length >= 20,
  },
  FIRST_REVIEW: {
    name: "First Review",
    description: "Left a review for an event.",
    condition: (user: any) => user.reviews.length >= 1,
  },
  FIRST_EVENT_CREATED: {
    name: "First Event Created",
    description: "Created their first event.",
    condition: (user: any) => user.events.length >= 1,
  },
  HUNDRED_TICKETS_SOLD: {
    name: "100 Tickets Sold",
    description: "Sold 100 tickets for events.",
    condition: (user: any) =>
      user.events.reduce(
        (sum: number, event: any) => sum + event.ticketsSold,
        0
      ) >= 100,
  },
  FIVE_HUNDRED_TICKETS_SOLD: {
    name: "500 Tickets Sold",
    description: "Sold 500 tickets for events.",
    condition: (user: any) =>
      user.events.reduce(
        (sum: number, event: any) => sum + event.ticketsSold,
        0
      ) >= 500,
  },
  THOUSAND_TICKETS_SOLD: {
    name: "1000 Tickets Sold",
    description: "Sold 1000 tickets for events.",
    condition: (user: any) =>
      user.events.reduce(
        (sum: number, event: any) => sum + event.ticketsSold,
        0
      ) >= 1000,
  },
};

async function awardBadges(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      orders: true,
      events: true,
      reviews: true,
      badges: true,
    },
  });

  if (!user) return;

  for (const [key, criteria] of Object.entries(badgeCriteria)) {
    const hasBadge = user.badges.some(
      (badge: any) => badge.name === criteria.name
    );

    if (!hasBadge && criteria.condition(user)) {
      // Award the badge
      await prisma.badge.upsert({
        where: { name: criteria.name },
        update: {},
        create: {
          name: criteria.name,
          description: criteria.description,
          users: {
            connect: { id: userId },
          },
        },
      });
    }
  }
}
