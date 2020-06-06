const express = require("express");

//initilize router
const router = express.Router();

//importing controller methods
const { createUser } = require("../controllers/users");

router.route("/").post(createUser);

//export router
module.exports = router;
