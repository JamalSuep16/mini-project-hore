import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import handlebars from "handlebars";

import { registerSchema } from "../schemas/auth-schemas";
const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, username, email, password, role } = registerSchema.parse(
      req.body
    );

    if (!name || !username || !email || !password) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email, username: username },
    });

    if (existingUser) {
      res.status(400).json({ message: "Email or username has already taken" });
      return;
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await prisma.user.create({
      data: { name, username, email, password: hashedPassword, role },
    });

    const confirmToken = crypto.randomBytes(20).toString("hex");
    const confirmationLink = `http://localhost:8000/api/v1/auth/confirm-email?token=${confirmToken}`;

    await prisma.confirmToken.create({
      data: {
        expiredDate: new Date(Date.now() + 1000 * 60 * 5),
        token: confirmToken,
        userId: newUser.id,
      },
    });

    const templateSource = await fs.readFile(
      "src/templates/email-confirmation-template.hbs"
    );
    const compiledTemplate = handlebars.compile(templateSource.toString());
    const htmlTemplate = compiledTemplate({
      name: name,
      link: confirmationLink,
    });
    const { data, error } = await resend.emails.send({
      from: "JustBlog <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to JustBlog",
      html: htmlTemplate,
    });

    if (error) {
      res.status(400).json({ error, data });
      return;
    }

    res.status(201).json({ ok: true, message: "New user added" });
  } catch (error) {
    next(error);
  }
}
