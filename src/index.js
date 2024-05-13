import { connect } from "mongoose";
import connectDB from "./db/index.js";

import dotenv from "dotenv";
// require("dotenv").config({ path: "./.env" });

dotenv.config({ path: "./.env" });
console.log(process.env);
console.log(process.env.MONGODB_URI);

connectDB();
