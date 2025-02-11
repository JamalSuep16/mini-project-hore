// src/routes/user.ts
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get user badges
router.get("/:userId/badges", async (req, res) => {
  const { userId } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
    include: { badges: true },
  });

  if (user) {
    res.json(user.badges);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
