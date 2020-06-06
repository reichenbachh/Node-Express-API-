//import model
const UserInfo = require("../models/UserInfo");

//Create a new User
exports.createUser = async (req, res, next) => {
  const userInfo = await UserInfo.create(req.body);
  res.status(201).json({
    success: true,
    data: userInfo,
  });
};
