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

// // FRONT END

// <div class="profile">
//   <h2>Badges</h2>
//   <div id="badges-container">
//     <!-- Badges will be dynamically inserted here -->
//   </div>
// </div>

// <script>
//   const userId = 1; // Replace with the actual user ID
//   fetch(`/api/users/${userId}/badges`)
//     .then((response) => response.json())
//     .then((badges) => {
//       const badgesContainer = document.getElementById('badges-container');
//       badges.forEach((badge) => {
//         const badgeElement = document.createElement('div');
//         badgeElement.className = 'badge';
//         badgeElement.innerHTML = `
//           <h3>${badge.name}</h3>
//           <p>${badge.description}</p>
//         `;
//         badgesContainer.appendChild(badgeElement);
//       });
//     });
// </script>

// // TRIGGER

// // After event registration
// await awardFirstEventBadge(userId);
// await awardEventCountBadge(userId);

// // After leaving a review
// await awardReviewBadge(userId);

// // After creating an event
// await awardFirstEventCreatedBadge(userId);

// // After ticket sales
// await awardTicketSalesBadge(userId);
