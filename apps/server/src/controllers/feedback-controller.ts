import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFeedback(req: Request, res: Response) {
  try {
    const data = await prisma.feedback.findMany();
    res.status(200).json({ get: "successful", data: data });
  } catch (error) {
    console.error(error);
  }
}

export async function createFeedback(req: Request, res: Response) {
  const { title, comments, ratings, suggestions, userId, eventId } = req.body;

  if (!title || !comments || !ratings || !userId || !eventId) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }  

  
  try {
    const createFeedback = await prisma.feedback.create({
      data: {
        title,
        comments,
        ratings: Number(ratings),
        suggestions,
        userId: Number(userId),
        eventId: Number(eventId)
      },
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Feedback successfully created!",
        data: createFeedback,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ unlucky: true });
  }
}
