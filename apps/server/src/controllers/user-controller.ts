import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import {
  awardFirstEventBadge,
  awardEventCountBadge,
  awardReviewBadge,
  awardFirstEventCreatedBadge,
  awardTicketSalesBadge,
} from "./badge-controller"; // Assuming badge functions are in badgeService.ts

const prisma = new PrismaClient();

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ ok: false, error: "Invalid user ID" });
    }

    // Retrieve user with relevant relations
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        badges: true,
        Order: true,
        feedbacks: true,
        events: { include: { Order: true } },
      },
    });

    if (!user) {
      return res.status(404).json({ ok: false, error: "User not found" });
    }

    // Award badges
    await awardFirstEventBadge(userId);
    await awardEventCountBadge(userId);
    await awardReviewBadge(userId);
    await awardFirstEventCreatedBadge(userId);
    await awardTicketSalesBadge(userId);

    // Fetch updated user data with badges
    const updatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { badges: true },
    });

    res.status(200).json({ ok: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
};
