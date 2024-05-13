import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//to get data frrom json file
app.use(express.json({ limit: "20kb" }));

// got get data from websites
app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

//assets for public
app.use(express.static("public"));

export { app };
