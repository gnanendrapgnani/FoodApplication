import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDb();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hi backend/api is working");
});

app.listen(port, () => {
  console.log(`The server is on: http://localhost:${port}/`);
});
