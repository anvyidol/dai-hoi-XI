const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        avt: {
            type: String,
        },
        name: {
            type: String,
        },
        content: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = new mongoose.model("user", user);
