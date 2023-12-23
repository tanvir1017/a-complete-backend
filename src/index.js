import dotenv from "dotenv";
import connectDb from "./db/index.js";

// But there is a problem about dotenv after importing like this above ↖️. We have to configure it
dotenv.config({ path: "./env" }); // Now are telling dotenv file to configure our env file as secret env file.
// But there was a problem left yet, the problem is we can't use dotenv like this, we have to use it as experimental version. In package.json file we have to configure it to run it by experimental like this => "scripts:{"dev": "nodemon -f dotenv/config --experimental-json-modules src/index.js"}"

// Second approach (Standard)

// Write the connectionInstance file into a separate place, then import to this file
connectDb();

/* 

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

    First approach (Basic)
        in this approach we wer importing mongoose, express and connect db with try-catch the listening to the port after connection but if there any problem then it will throw an error

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Database is not able to talk: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
 */
