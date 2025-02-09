import express from "express";
import {
  getAllTickets,
  createTicket,
  deleteTicket,
  getTicketById,
} from "../controllers/tickets-controller";

const router = express.Router();

// Define routes
router.route("/").get(getAllTickets).post(createTicket);
router.route("/:id").get(getTicketById).delete(deleteTicket);

export default router;
