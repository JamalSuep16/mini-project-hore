import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDashboard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const organizerId = req.user?.id;

    // Fetch all events owned by the organizer
    const events = await prisma.event.findMany({
      where: { organizerId: organizerId },
      include: { Transaction: true },
    });

    // Calculate total registrations and sum of transactions
    let totalRegistrations = 0;
    let totalRevenue = 0;

    events.forEach((event) => {
      totalRegistrations += event.Transaction.length;
      totalRevenue += event.Transaction.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      );
    });

    // Group registrations by day, month, year
    const dailyRegistrations: { [key: string]: number } = {};
    const monthlyRegistrations: { [key: string]: number } = {};
    const yearlyRegistrations: { [key: string]: number } = {};

    events.forEach((event) => {
      const date = new Date(event.date);
      const day = formatDate(date, "YYYY-MM-DD");
      const month = formatDate(date, "YYYY-MM");
      const year = formatDate(date, "YYYY");

      dailyRegistrations[day] =
        (dailyRegistrations[day] || 0) + event.Transaction.length;
      monthlyRegistrations[month] =
        (monthlyRegistrations[month] || 0) + event.Transaction.length;
      yearlyRegistrations[year] =
        (yearlyRegistrations[year] || 0) + event.Transaction.length;
    });

    // Create helper function to format date
    function formatDate(date: Date, format: string) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      if (format === "YYYY-MM-DD") return `${year}-${month}-${day}`;
      if (format === "YYYY-MM") return `${year}-${month}`;
      if (format === "YYYY") return `${year}`;
      return "";
    }

    // Return all data in a single response
    res.status(200).json({
      events,
      totalRegistrations,
      totalRevenue,
      dailyRegistrations,
      monthlyRegistrations,
      yearlyRegistrations,
    });
  } catch (error) {
    next(error);
  }
}
