const postModel = require("../models/post");
const { cloudinary } = require("../Cloudinary/Cloudinary");

const UserControllers = {
    uploadAvt: async (req, res) => {
        try {
            const file = req.body?.data;
            const uploadRes = await cloudinary.uploader.upload(file, {
                upload_preset: "doanHoi",
            });
            const avtUrl = uploadRes.url;
            res.status(200).json(avtUrl);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    newPost: async (req, res) => {
        try {
            await postModel.create({
                avt: req.body.avt,
                content: req.body.content,
                name: req.body.name,
            });

            return res.status(200).json("OK");
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getAllPost: async (req, res) => {
        try {
            const posts = await postModel.find();
            const total = posts.length;
            const data = {
                posts: posts.reverse().slice(0, 4),
                total,
            };
            return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = UserControllers;
