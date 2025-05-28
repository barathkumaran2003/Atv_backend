const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json()); // ✅ needed to parse JSON body
app.use("/", authRoutes); // ✅ make sure this matches your POST URL

module.exports = app;
