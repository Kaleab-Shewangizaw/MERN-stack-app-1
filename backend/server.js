// const express = require('express'); instead of this we can use modern way by adding "type": "module", in the package.json

// so the other way will be:

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // to parse the incoming request with JSON payloads (middleware). simply: it allows us to use req.body in our routes

app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Server error while creating product" });
  }
});

app.listen(5001, () => {
  connectDB(); // connecting to MongoDB server
  console.log("Server is running on port 5001");
});

// v4COjj9MsK44p8rj
