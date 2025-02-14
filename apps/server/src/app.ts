import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import postRouter from "./routers/post-router";
import categoryRouter from "./routers/category-router";
import authRouter from "./routers/auth-router";
import notFoundMiddleware from "./middlewares/not-found-middleware";
import errorMiddleware from "./middlewares/error-middleware";
import events from "./routers/event-routers"

import leaderBoardRouter from "./routers/leaderboard-routers";

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
    methods: ['GET', 'POST'],
    credentials: true
  })
);

// app.use("/api/v1/post", postRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/events", events)
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/leaderboard", leaderBoardRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
