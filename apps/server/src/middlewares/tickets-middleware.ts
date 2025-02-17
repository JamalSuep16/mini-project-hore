import { Request, Response, NextFunction } from "express";

export async function validateTicket(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId, eventId } = req.body;

  if (!userId || !eventId) {
    return res.status(400).json({ error: "userId and eventId are required" });
  }

  if (typeof userId !== "number") {
    return res.status(400).json({ error: "userId must be a number" });
  }

  if (typeof eventId !== "string") {
    return res.status(400).json({ error: "eventId must be a string" });
  }

  next();
}
