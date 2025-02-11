import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all tickets
export async function getAllTickets(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const tickets = await prisma.ticket.findMany({
      // include: { User: true, Event: true },
    });
    res.status(200).json(tickets);
  } catch (error) {
    next(Error);
  }
}

// Get ticket by ID
export async function getTicketById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: { User: true, Event: true },
    });

    if (!ticket) {
      res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    next(Error);
  }
}

// Create a new ticket
export async function createTicket(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId, eventId } = req.body;
  try {
    const ticket = await prisma.ticket.create({
      data: { userId, eventId },
    });
    res.status(201).json(ticket);
  } catch (error) {
    next(Error);
  }
}

// Delete a ticket
export async function deleteTicket(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    await prisma.ticket.delete({ where: { id } });
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    next(Error);
  }
}
