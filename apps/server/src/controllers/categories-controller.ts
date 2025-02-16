import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCategories(req: Request, res: Response) {
  try {
    const events = await prisma.categoriess.findMany();
    res.status(200).json({ get: "success", data: events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "problem in internal server" });
  }
}

export async function getSingleCategories(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const cates = await prisma.categoriess.findUnique({
      where: { id: Number(id) },
    });
    res.status(200).json({ get: "success", data: cates });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "problem in internal server" });
  }
}
