import express from "express";
import {
  getEventStats,
  getRegistrationStats,
  getTransactionStats,
} from "../controllers/stats-controller";
import { roleGuard } from "../middlewares/auth-middleware";

// router.get("/events", verifyOrganizer, statsController.getEventStats);
// router.get(
//   "/registrations",
//   verifyOrganizer,
//   statsController.getRegistrationStats
// );
// router.get(
//   "/transactions",
//   verifyOrganizer,
//   statsController.getTransactionStats
// );

const router = express.Router();

router.route("/getEventStats").get(roleGuard("ORGANIZER"), getEventStats);
router
  .route("/getRegistrationStats")
  .get(roleGuard("ORGANIZER"), getRegistrationStats);
router
  .route("/getTransactionStats")
  .get(roleGuard("ORGANIZER"), getTransactionStats);

export default router;
