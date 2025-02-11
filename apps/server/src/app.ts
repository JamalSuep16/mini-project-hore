import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import postRouter from "./routers/post-router";
// import categoryRouter from "./routers/category-router";
import authRouter from "./routers/auth-router";
import ticketsRouter from "./routers/tickets-router";
import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";
import referralRouter from "./routers/referral-router";
import statsRouter from "./routers/stats-router";
import categoryRouter from "./routers/category-router"


import leaderBoardRouter from "./routers/leaderboard-routers";
import userRouter from "./routers/user-router";
import events from "./routers/event-routers";

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
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// app.use("/api/v1/post", postRouter);
// app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tickets", ticketsRouter);
app.use("/api/v1/referral", referralRouter);
app.use("api/v1/stats", statsRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/events", events);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/leaderboards", leaderBoardRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

// app.get("/api/v1/posts", async (req: Request, res: Response) => {
//   try {
//     const events = await prisma.events.findMany();
//     res.status(200).json({ ok: true, data: events });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ ok: false, error: "Internal server error" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
