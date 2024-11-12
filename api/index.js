import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO;
// console.log(typeof url);
// console.log(typeof url);
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
const app = express();
app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
