import express from "express";
import { registerUser } from "../controllers/referral-controller";
// import {
//   getUserReferrals,
//   getReferralPoints,
// } from "../controllers/referral-controller";

const router = express.Router();

router.route("/register").post(registerUser);

// router.route("/referrals/:userId").get(getUserReferrals);

// router.route("/referral-points/:userId").get(getReferralPoints);

export default router;
