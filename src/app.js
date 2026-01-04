const express = require("express");

const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const errorHandler = require("./middlewares/error");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(process.cwd(), "public")));

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
