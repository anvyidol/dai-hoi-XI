const route = require("express").Router();
const userController = require("../controllers/UserControllers");

route.post("/upload-avt", userController.uploadAvt);
route.post("/new-post", userController.newPost);
route.get("/all-post", userController.getAllPost);

module.exports = route;
