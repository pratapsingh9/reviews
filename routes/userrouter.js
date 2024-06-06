import { Router } from "express";
import prismaClient from "../db/prismaclient.js";
import StoreCache from "../cache/nodeCache.js";
export const router = Router();
router.post("/register/newuser", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({
        success: false,
        msg: "no username and password",
      });
    }
    const newuser = await prismaClient.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return res.json({
      success: true,
      msg: "User created",
      user: newuser,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      err: error.message,
      successP: false,
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    const { username } = req.cookies;
    if (StoreCache.has(`userdata${username}`)) {
      return res.json(StoreCache.get(`userdata${username}`));
    }

    const users = await prismaClient.user.findMany();
    StoreCache.set(`userdata${username}`, users);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});

router.post("/newuser", async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!newUser) {
      return res.json({ msg: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await prismaClient.post.findMany();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const cookies = req.cookies;
    const user = await prismaClient.user.findUnique({
      where: {
        id: cookies.userid,
      },
    });
    if (user) {
      return res.json(user);
    }
    return res.json({ message: "User not found" });
  } catch (error) {
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});

router.post("/ps", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return res.json(user);
  } catch (error) {
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});

router.get("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return req.json({ msg: "Please enter all fields" });
    }
    const create_user = await prismaClient.user.create({
      data: {
        email: email,
        name: username,
        password: password,
      },
    });
    return res.json(create_user);
  } catch (error) {
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
    return res.json(user);
  } catch (error) {
    return res.json({
      msg: "Error",
      error: error.message,
    });
  }
});
