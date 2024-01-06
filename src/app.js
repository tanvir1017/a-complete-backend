import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

// using app.use we configure cors for handling request
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Limiting the json file size
app.use(express.json({ limit: "16kb" }));

// Encoding url for handling url request
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // limiting the json file limit

// for keeping static file
app.use(express.static("public"));

// cookie parser
app.use(cookieParser());

// Routes Import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
