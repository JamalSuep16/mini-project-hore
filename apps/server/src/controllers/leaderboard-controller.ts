import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLeaderboard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const attendees = await prisma.order.groupBy({
      by: ["userId"],
      _count: {
        userId: true,
      },
      orderBy: {
        _count: {
          userId: "desc",
        },
      },
      take: 1,
    });
    const topAttendee = await Promise.all(
      attendees.map(async (attendee) => {
        const user = await prisma.user.findUnique({
          where: { id: attendee.userId },
        });
        return {
          userId: attendee.userId,
          orderCount: attendee._count.userId,
          userDetails: user,
        };
      })
    );

    const events = await prisma.order.groupBy({
      by: ["eventId"],
      _count: {
        eventId: true,
      },
      orderBy: {
        _count: {
          eventId: "desc",
        },
      },
      take: 1,
    });
    const topEvent = await Promise.all(
      events.map(async (event) => {
        const user = await prisma.user.findUnique({
          where: { id: event.eventId },
        });
        return {
          eventId: event.eventId,
          orderCount: event._count.eventId,
          userDetails: user,
        };
      })
    );

    // const organizer = await prisma.order.groupBy({
    //   by: ["organizerId"],
    //   _count: {
    //     organizerId: true,
    //   },
    //   orderBy: {
    //     _count: {
    //       organizerId: "desc",
    //     },
    //   },
    //   take: 1,
    // });
    // const topOrganizer = await Promise.all(
    //   events.map(async (organizer) => {
    //     const user = await prisma.user.findUnique({
    //       where: { id: organizer.organizerId },
    //     });
    //     return {
    //       organizerId: organizer.organizerId,
    //       orderCount: organizer._count.organizerId,
    //       userDetails: user,
    //     };
    //   })
    // );

    const response = {
      topAttendee: topAttendee,
      topEvent: topEvent,
      // topOrganizer: topOrganizer,
    };

    res.status(200).json({ ok: true, data: response });
  } catch (error) {
    next(error);
  }
}
