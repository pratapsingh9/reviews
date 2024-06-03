import express, { Router } from "express";
import { configDotenv } from "dotenv";
import { router } from "./routes/userrouter.js";
import cors from "cors";
configDotenv();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", router);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port 3000!");
});
