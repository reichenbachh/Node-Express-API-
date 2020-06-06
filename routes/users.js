const express = require("express");

//initilize router
const router = express.Router();

//importing controller methods
const {
  createUser,
  getUserInfo,
  getAllUsers,
  updateUserInfo,
  deleteUserInfo,
} = require("../controllers/users");

router.route("/").post(createUser).get(getAllUsers);
router
  .route("/:id")
  .get(getUserInfo)
  .put(updateUserInfo)
  .delete(deleteUserInfo);

//export router
module.exports = router;
