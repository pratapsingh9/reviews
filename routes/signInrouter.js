import { Router } from "express";
import express from "express";
import jwt from "jsonwebtoken";
import prismaClient from "../db/prismaclient";
import NodeCache from "node-cache";
const router = Router();
const userCache = new NodeCache();

setInterval(() => {
  
}, interval);

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

    return res.json(findeduser);
  } catch (error) {
    console.log(error);
  }
});

export default router;
