import { Request, Response } from "express";
import cloudinary from "../configs/cloudinary";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import { promises } from "node:fs";

const prisma = new PrismaClient();

export async function getAllEvents(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json({ get: "success", data: events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "problem in internal server" });
  }
}

export async function getSingleEvent(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
    });

    if (!event) {
      res.status(404).json({ error: "Event not found" });
      return;
    }

    res.status(200).json({ get: "success", data: event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "problem in internal server" });
  }
}

export async function getUpcomingEvents(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany({
      where: { upcoming: true },
    });

    res.json({ get: "success", data: events });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getLocationEvents(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        location: "asc",
      },
    });

    // Group events by location
    const groupedEvents = events.reduce(
      (acc: { [key: string]: typeof events }, event) => {
        if (!acc[event.location]) {
          acc[event.location] = [];
        }
        acc[event.location].push(event);
        return acc;
      },
      {}
    );

    res.json({ get: "success", data: groupedEvents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getPaginatedEvents(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 2;
    const skip = (page - 1) * limit;

    const events = await prisma.event.findMany({
      skip: skip,
      take: limit,
    });
    const totalCount = await prisma.event.count();
    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      get: "success",
      data: events,
      meta: { totalCount, page, limit, totalPages },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "problem in internal server" });
  }
}

export async function postEvent(req: Request, res: Response) {
  const { title, desc, categories, upcoming, price, date, slug, location } =
    req.body;

  try {
    // 🛑 Check if file exists before uploading
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required!" });
    }

    // 🖼️ Upload image to Cloudinary
    const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog/images",
    });

    // 🗑️ Delete local file AFTER Cloudinary upload completes
    await fs.unlink(req.file.path);

    // 📝 Save event in the database
    const newEvent = await prisma.event.create({
      data: {
        title,
        desc,
        categories,
        image: cloudinaryData.secure_url, // ✅ Use Cloudinary URL instead
        upcoming: upcoming === "true",
        price: Number(price),
        date: new Date(date),
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        location,
      },
    });

    res.status(201).json({
      success: true,
      message: "Event successfully created!",
      data: newEvent,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Error creating event in database" });
  }
}


export const searchEvents = async (
  req: Request,
  res: Response
): Promise<void> => {
  const query = req.query.q as string;

  if (!query) {
    res.status(400).json({ error: "Search query is required" });
    return;
  }

  try {
    const events = await prisma.event.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { desc: { contains: query, mode: "insensitive" } },
          // { categories: { contains: query, mode: 'insensitive' } }
        ],
      },
      select: {
        id: true,
        title: true,
        image: true,
        categories: true,
      },
      take: 5,
    });

    res.json({ data: events });
    return;
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
