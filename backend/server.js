require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/api", require("./routes/clientRouter.js"));
app.use("/api", require("./routes/userRouter.js"));

const URI = process.env.MONGODB_URL;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to mongodb");
});

mongoose.connect(URI, {});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("Server is running on port", port);
});
