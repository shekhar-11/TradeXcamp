import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import dotenv from "dotenv";

// Load the .env file from the root
dotenv.config({ path: "../.env" });

// dotenv.config();
import authRouter from "./routes/auth.route.js";

import userRouter from "./routes/user.route.js";
const url = process.env.MONGO;
// console.log(typeof url);
// console.log(typeof url);
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
const app = express();

app.use(express.json()); //it allows the user to send the json format input
app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});
app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/auth", authRouter);

//middleware
app.use((err, req, res, next) => {
  //err is the error from input ans NEXT is to go to the next middleware
  const statusCode = err.statusCode || 500; //500 = internal server error
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    //these all are returned in the error message
    success: false,
    statusCode: statusCode,
    message: message,
  });
});
