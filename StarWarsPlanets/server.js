"use strict";

const express = require("express");
const app = express();

const IP = "127.0.0.1";
const PORT = 8081;

app.use(express.static("public"));

app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`);
});