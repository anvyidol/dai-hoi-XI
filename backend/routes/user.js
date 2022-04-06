const route = require("express").Router();
const userController = require("../controllers/UserControllers");

route.post("/upload", userController.upload);

module.exports = route;
