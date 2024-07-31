import { Router } from "express";
import { z } from "zod";
import { prismaClient } from "../db/prisma";

const router = Router();

const singInSchema = z.object({
  username: z
    .string({ message: "Enter your proper Username" })
    .min(6)
    .max(15)
    .trim(),
  password: z.string({ message: "Passowrd Must be Correct" }),
});

type signIn = z.infer<typeof singInSchema>;

router.get("/signingmail", async (req, res) => {
  try {
    const { username, password }: signIn = req.body;
    const createUserWithGmail = await prismaClient.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return res.status(200).json({
        id: createUserWithGmail.id,
        username: createUserWithGmail.password,
    })
  } catch (error) {}
});
