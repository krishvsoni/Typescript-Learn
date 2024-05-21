import { PrismaClient } from "@prisma/client";
import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

const client = new PrismaClient();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later"
});

app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    message: "Healthy server"
  });
});

app.post("/", async (req, res) => {
  await client.user.create({
    data: {
      email: req.body.email,
      name: req.body.name
    }
  });

  res.json({
    message: "Done signing up!"
  });
});

app.listen(3000);
