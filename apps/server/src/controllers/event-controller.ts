import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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

      res.json({get: "success", data: events});
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
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

// export async function createEvent(req:Request, res:Response) {
//   try {
//     const { title, desc, categories, upcoming, price, date, slug, location } = req.body;
    
//     // Make sure req.file exists (if using Multer for image upload)
//     const image = req.file ? req.file.path : null; // Save file path if uploaded

//     // Ensure all required fields are present
//     if (!title || !desc || !categories || !date || !price || !location) {
//       return res.status(400).json({ error: "Missing required fields!" });
//     }

//     const newEvent = await prisma.event.create({
//       data: {
//         title,
//         desc,
//         categories,
//         image:, // Now using file path
//         upcoming: upcoming === "true", // Convert to boolean if needed
//         price: Number(price), // Convert to number if needed
//         date: new Date(date), // Convert to Date format
//         slug,
//         location,
//       },
//     });

//     res.status(201).json({
//       create: "success",
//       message: "🎉 Event successfully created!",
//       data: newEvent,
//     });
//   } catch (error) {
//     console.error("Error creating event:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

export const searchEvents = async (req: Request, res: Response): Promise<void> => {
  const query = req.query.q as string;
  
  if (!query) {
    res.status(400).json({ error: 'Search query is required' });
    return;
  }

  try {
    const events = await prisma.event.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { desc: { contains: query, mode: 'insensitive' } },
          // { categories: { contains: query, mode: 'insensitive' } }
        ]
      },
      select: {
        id: true,
        title: true,
        image: true,
        categories: true
      },
      take: 5
    });

    res.json({ data: events });
    return;
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }
};
