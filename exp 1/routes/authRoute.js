import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  
  res.send("login page");
});
router.get("/signup", (req, res) => {
  res.send("signup page");
});

export default router;
