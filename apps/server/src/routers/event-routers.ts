import express from "express";
import {
  getLocationEvents,
  searchEvents,
  getAllEvents,
  getPaginatedEvents,
  getSingleEvent,
  getUpcomingEvents,
  postEvent
} from "../controllers/event-controller";
import upload from "../middlewares/upload-middleware";

const router = express.Router();

router.route("/").get(getAllEvents).post(upload.single("image"), postEvent);
router.route("/locations").get(getLocationEvents);
router.route("/paginated").get(getPaginatedEvents);
router.route("/upcoming").get(getUpcomingEvents);
router.route("/search").get(searchEvents);
router.route("/:id").get(getSingleEvent);

export default router;
