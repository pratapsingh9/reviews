import { Router } from "express";
import express from "express";
import jwt from "jsonwebtoken";
import prismaClient from "../db/prismaclient";

const router = Router();

router.get("/find", async (req, res) => {
  try {
    const { username, password } = req.body;
    const findeduser = await prismaClient.user.findMany({
      where: {
        username: username,
        password: password,
      },
    });
    if (!findeduser) {
      return res.json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
