import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./Routes/user.route.js";

const server = express();
dotenv.config();

server.use(express.json());

const conn = process.env.MONGO_URI;

mongoose
  .connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database successfully"))
  .catch((error) => console.error("Error connecting to database:", error));



server.use("/api/users/", userRouter)


export default server;
