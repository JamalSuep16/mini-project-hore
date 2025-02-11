import express from "express";
import {
  // createEvent,
  searchEvents,
  getAllEvents,
  getPaginatedEvents,
  getSingleEvent,
  getUpcomingEvents
} from "../controllers/event-controller";
// import upload from "../middlewares/upload-middleware";

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.route("/").get(getAllEvents);
router.route("/paginated").get(getPaginatedEvents);
router.route("/upcoming").get(getUpcomingEvents);
router.route("/search").get(searchEvents);
router.route("/:id").get(getSingleEvent);

export default router;
