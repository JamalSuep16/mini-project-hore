import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();

// Mendapatkan statistik acara dengan filter waktu
export async function getEventStats(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { range } = req.query; // "year", "month", "day"
    let groupByFormat;

    if (range === "year") {
      groupByFormat = "%Y"; // Format untuk tahun
    } else if (range === "month") {
      groupByFormat = "%Y-%m"; // Format untuk bulan
    } else {
      groupByFormat = "%Y-%m-%d"; // Format untuk hari
    }

    const stats = await prisma.$queryRaw`
            SELECT 
                DATE_FORMAT(date, ${groupByFormat}) AS time_range, 
                COUNT(*) AS total_events
            FROM Event
            GROUP BY time_range
            ORDER BY time_range ASC
        `;

    res.json(stats);
  } catch (error) {
    next(error);
  }
}

// Mendapatkan jumlah peserta terdaftar per rentang waktu
export async function getRegistrationStats(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { range } = req.query;
    let groupByFormat;

    if (range === "year") {
      groupByFormat = "%Y";
    } else if (range === "month") {
      groupByFormat = "%Y-%m";
    } else {
      groupByFormat = "%Y-%m-%d";
    }

    const stats = await prisma.$queryRaw`
            SELECT 
                DATE_FORMAT(createdAt, ${groupByFormat}) AS time_range, 
                COUNT(*) AS total_registrations
            FROM Registration
            GROUP BY time_range
            ORDER BY time_range ASC
        `;

    res.json(stats);
  } catch (error) {
    next(error);
  }
}

// Mendapatkan statistik transaksi berdasarkan waktu
export async function getTransactionStats(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { range } = req.query;
    let groupByFormat;

    if (range === "year") {
      groupByFormat = "%Y";
    } else if (range === "month") {
      groupByFormat = "%Y-%m";
    } else {
      groupByFormat = "%Y-%m-%d";
    }

    const stats = await prisma.$queryRaw`
            SELECT 
                DATE_FORMAT(createdAt, ${groupByFormat}) AS time_range, 
                COUNT(*) AS total_transactions
            FROM Registration
            WHERE transactionId IS NOT NULL
            GROUP BY time_range
            ORDER BY time_range ASC
        `;

    res.json(stats);
  } catch (error) {
    next(error);
  }
}
