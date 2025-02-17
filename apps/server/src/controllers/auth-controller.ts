import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt, { genSalt, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import handlebars from "handlebars";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log("Hit");
    const { name, email, password, referralCode, role, username } = req.body;

    const existingrefferal = await prisma.user.findUnique({
      where: { referral: referralCode },
    });

    const date = new Date();
    const generatedReferralCode =
      name.slice(0, 3) + "REF" + date.getMilliseconds();

    if (referralCode && referralCode !== existingrefferal?.referral) {
      res.status(400).json({ message: "Invalid referral code!!!" });
      return;
    }

    const salt = await genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username, // or any other logic to generate username
        password: hashedPassword,
        referral: generatedReferralCode,
        role: role,
      },
    });

    if (referralCode) {
      const referralOwner = await prisma.user.findFirst({
        where: { referral: referralCode },
      });

      await prisma.coupon.create({
        data: {
          discount: 10000,
          code: `${Math.random()}`,
          userId: user?.id ?? 0,
          expirationDate: new Date(date.setMonth(date.getMonth() + 3)),
        },
      });

      if (referralOwner && role === "USER") {
        await prisma.points.create({
          data: {
            balance: 10000,
            userId: referralOwner?.id,
            expirationDate: new Date(date.setMonth(date.getMonth() + 3)),
          },
        });
      }
    }

    await prisma.wallet.create({
      data: {
        userId: user.id,
        credit: 0,
      },
    });

    // where to put the code for expiration date

    res.status(201).json({ ok: true, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
      res.status(400).json({ message: "Missing required fields!" });
      return;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });
    if (!existingUser) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    if (!existingUser.emailConfirmed) {
      res.status(400).json({ message: "Please complete your registration" });
      return;
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtPayload = {
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "1h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      })
      .status(200)
      .json({ ok: true, message: "Welcome" });
  } catch (error) {
    next(error);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    req.user = null;
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "Logout successfully" });
  } catch (error) {
    next(Error);
  }
}
