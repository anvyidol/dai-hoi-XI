const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const user = require("./models/user");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
dotenv.config();
app.use(cors());

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

app.use("/v1/user", userRoute);

app.listen(PORT, (req, res) => {
    console.log("OK");
});
