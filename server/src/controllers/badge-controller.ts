import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// User Badges

export async function awardFirstEventBadge(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { Order: true },
  });

  if (user && user.Order.length === 1) {
    const badge = await prisma.badge.findFirst({
      where: { name: "First Event" },
    });

    if (badge) {
      await prisma.user.update({
        where: { id: userId },
        data: { badges: { connect: { id: badge.id } } },
      });
    }
  }
}

export async function awardEventCountBadge(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { Order: true },
  });

  if (user) {
    const eventCount = user.Order.length;
    let badgeName = "";

    if (eventCount === 5) badgeName = "5 Events";
    else if (eventCount === 10) badgeName = "10 Events";
    else if (eventCount === 20) badgeName = "20 Events";

    if (badgeName) {
      const badge = await prisma.badge.findFirst({
        where: { name: badgeName },
      });

      if (badge) {
        await prisma.user.update({
          where: { id: userId },
          data: { badges: { connect: { id: badge.id } } },
        });
      }
    }
  }
}

export async function awardReviewBadge(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { feedbacks: true },
  });

  if (user && user.feedbacks.length > 0) {
    const badge = await prisma.badge.findFirst({
      where: { name: "Event Reviewer" },
    });

    if (badge) {
      await prisma.user.update({
        where: { id: userId },
        data: { badges: { connect: { id: badge.id } } },
      });
    }
  }
}

// Organizer Badges

export async function awardFirstEventCreatedBadge(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { events: true },
  });

  if (user && user.events.length === 1) {
    const badge = await prisma.badge.findFirst({
      where: { name: "First Event Created" },
    });

    if (badge) {
      await prisma.user.update({
        where: { id: userId },
        data: { badges: { connect: { id: badge.id } } },
      });
    }
  }
}

export async function awardTicketSalesBadge(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { events: { include: { Order: true } } },
  });

  if (user) {
    const totalTicketsSold = user.events.reduce(
      (sum, event) => sum + event.Order.length,
      0
    );

    let badgeName = "";

    if (totalTicketsSold >= 1000) badgeName = "1000 Tickets Sold";
    else if (totalTicketsSold >= 500) badgeName = "500 Tickets Sold";
    else if (totalTicketsSold >= 100) badgeName = "100 Tickets Sold";

    if (badgeName) {
      const badge = await prisma.badge.findFirst({
        where: { name: badgeName },
      });

      if (badge) {
        await prisma.user.update({
          where: { id: userId },
          data: { badges: { connect: { id: badge.id } } },
        });
      }
    }
  }
}
