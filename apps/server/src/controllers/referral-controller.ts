import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Generate referral code for new user
// export async function generateReferralCode(userId: number) {
//   const referralCode = uuidv4().slice(0, 8);
//   await prisma.user.update({
//     where: { id: userId },
//     data: { referralCode },
//   });
//   return referralCode;
// }

// Register a new user with referral code
export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, username, email, password, role, referralCode } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password,
        role,
        referralCode: uuidv4().slice(0, 8),
      },
    });

    const generatedCode = uuidv4().slice(0, 8);

    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode },
      });
      if (referrer) {
        await prisma.user.update({
          where: { id: referrer.id },
          data: { points: { increment: 10000 } }, // Add points to referrer
        });
      }
    }

    res.status(200).json({
      message: "User registered successfully",
      referralCode: generatedCode,
    });
  } catch (error) {
    next(error);
  }
}
