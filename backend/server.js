// const express = require('express'); instead of this we can use modern way by adding "type": "module", in the package.json

// so the other way will be:

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>API is ready</h1>");
});

console.log(process.env.MONGO_URI);
app.listen(3000, () => {
  connectDB(); // connecting to MongoDB server
  console.log("Server is running on port 3000");
});

// v4COjj9MsK44p8rj
