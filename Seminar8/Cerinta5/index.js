"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");
require("dotenv").config();

const app = express();
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});