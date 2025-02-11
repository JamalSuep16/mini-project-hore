import express from "express";
import { getLeaderboard } from "../controllers/leaderboard-controller";

const router = express.Router();

router.route("/").get(getLeaderboard);

export default router;
