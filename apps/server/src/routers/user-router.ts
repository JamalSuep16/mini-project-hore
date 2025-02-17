import { Router } from "express";
import { getUserById } from "../controllers/user-controller";

const router = Router();

router.get("/:userId", getUserById);

export default router;
