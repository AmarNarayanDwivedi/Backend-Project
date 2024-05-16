import { connect } from "mongoose";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";

import dotenv from "dotenv";


dotenv.config({ path: "./.env" });
console.log(process.env);
console.log(process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is  running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });.
