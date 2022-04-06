const userModel = require("../models/user");
const { cloudinary } = require("../Cloudinary/Cloudinary");

const UserControllers = {
    upload: async (req, res) => {
        try {
            console.log(req.body);
            const file = req.body;
            const uploadRes = await cloudinary.uploader.upload(file, {
                upload_preset: "doanHoi",
            });
            const avtUrl = uploadRes.url;
            // const user = await userModel.create({
            //     avt: avtUrl,
            //     name: req.body.name,
            //     content: req.body.content,
            // });
            // await user.save();
            res.status(200).json(avtUrl);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};

module.exports = UserControllers;
