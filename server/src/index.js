require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const User = require("./routes/user");
const Oem = require("./routes/oemSpecs");
const oldCars = require("./routes/oldCar");
const { isAuthenticated } = require("./middlewares/auth");

const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

// Public routes
app.use("/users", User);
// private Routes
app.use("/cars", isAuthenticated, Oem);
app.use("/oldCars", isAuthenticated, oldCars);

app.get("/", (req, res) => {
  res.send("This is  Home Route");
});

// handling Fall back or undefined Routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ error: { message: error.message } });
});

app.listen(PORT, async () => {
  await connect();
  console.log(`app running on http://localhost:${PORT}`);
});
