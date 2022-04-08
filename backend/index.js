const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const postRoute = require("./routes/post");

const app = express();
const PORT = 5000;

app.use(cookieParser());
dotenv.config();
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

app.use(
    bodyParser.json({
        limit: "10mb",
    })
);

mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => {
        console.log("Connecting to MONGODB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/post", postRoute);

app.listen(PORT, (req, res) => {
    console.log("OK");
});
