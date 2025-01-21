import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8000;
const prisma = new PrismaClient();

app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).send("<h1>Welcome!</h1>");
});

app.get("/api/v1/posts", async (req: Request, res: Response) => {
  try {
    const events = await prisma.events.findMany(); 
    res.status(200).json({ ok: true, data: events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
