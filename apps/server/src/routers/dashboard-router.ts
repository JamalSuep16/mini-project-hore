import express from "express";

const router = express.Router();

import { getDashboard } from "../controllers/dashboard-controller";

router.route("/").get(getDashboard);

export default router;
