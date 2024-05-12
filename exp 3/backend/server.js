import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.router.js";
import connectDB from "./db/connectToDB.js";

const app = express();
const PORT = process.env.PORT || 3600;

dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
