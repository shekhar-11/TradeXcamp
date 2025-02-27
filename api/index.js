import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// Load the .env file from the root
dotenv.config({ path: "../.env" });
import listingRouter from "./routes/listing.route.js";

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
app.use(cookieParser());
import path from 'path';
app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});
app.get("/", (req, res) => {
  res.send("Hello WOrld");
});
 const __dirname = path.resolve();
app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/auth", authRouter);

app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

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
