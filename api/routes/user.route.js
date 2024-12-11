import express, { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { test, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello WOrld");
});
router.post("/update/:id", verifyToken, updateUser);

export default router;
