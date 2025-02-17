import express from "express";
import { createFeedback, getFeedback } from "../controllers/feedback-controller";

const router = express.Router();

router.route("/").get(getFeedback).post(createFeedback);

export default router;
