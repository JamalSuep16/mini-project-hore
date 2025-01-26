import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import postRouter from "./routers/post-router";
import categoryRouter from "./routers/category-router";
import authRouter from "./routers/auth-router";
import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";

const app = express();
const PORT = 8000;

// Read body property from request object
app.use(express.json());
// Read cookies property from req object
app.use(cookieParser());
// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1/post", postRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

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
