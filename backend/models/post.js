const mongoose = require("mongoose");

const post = new mongoose.Schema(
    {
        avt: {
            type: String,
        },
        name: {
            type: String,
            maxlength: 40,
        },
        content: {
            type: String,
            maxlength: 400,
        },
    },
    { timestamps: true }
);

module.exports = new mongoose.model("post", post);
