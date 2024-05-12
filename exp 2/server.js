import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./auth.js";
import connectDB from "./DB/connectDB.js";
import people from "./model/people.model.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  people
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json({ message: "wrong password" });
        }
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/signup", (req, res) => {
  people
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.use("/api/auth", authRouter);

app.listen(3030, () => {
  connectDB();
  console.log("sever running on port 3000");
});
