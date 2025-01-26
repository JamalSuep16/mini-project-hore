import express, { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "node:fs/promises";

const app = express();
const prisma = new PrismaClient();
const PORT = 8000;

// Achievement Badges - First Event Registration
export async function postFirstEventRegistBadge(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, firstEventRegistStatus } = req.body;
    if (!username || !firstEventRegistStatus) {
      res.status(400).json({
        message: "Badge not achieved yet: Regist to your first event.",
      });
      return;
    }
    await prisma.post.create({
      data: {
        name: username,
        badge: "First Event Registration Badge",
        icon: "first-event-regist-icon.jpg",
      },
    });
    res
      .status(200)
      .json({ ok: true, message: "First Event Registration Badge Achieved!" });
  } catch (error) {
    next(error);
  }
}

export async function getFirstEventRegistBadge(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const firstEventRegistBadge = await prisma.post.findMany();

    const response = firstEventRegistBadge.map(
      (post: { name: any; badge: any; icon: any }) => {
        return {
          name: post.name,
          badge: post.badge,
          icon: post.icon,
        };
      }
    );

    res
      .status(200)
      .json({ ok: true, message: "First Event Registration Badge Achieved!" });
  } catch (error) {
    next(error);
  }
}

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
