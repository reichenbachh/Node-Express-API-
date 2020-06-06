//import model
const UserInfo = require("../models/UserInfo");

//@desc  Create new userInfo
//@route POST/api/user
exports.createUser = async (req, res, next) => {
  try {
    const userInfo = await UserInfo.create(req.body);
    res.status(201).json({
      success: true,
      data: userInfo,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: "failed to create user",
    });
  }
};

//@desc  get a single user info by ID
//@route GET/api/user/:id
exports.getUserInfo = async (req, res, next) => {
  try {
    const userInfo = await UserInfo.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: userInfo,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: `user with id ${req.params.id} not found`,
    });
  }
};

//@desc  get all users
//@route GET/api/user
exports.getAllUsers = async (req, res, next) => {
  try {
    const userInfo = await UserInfo.find();
    res.status(200).json({
      success: true,
      count: userInfo.length,
      data: userInfo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc  update user info
//@route PUT/api/user/:id
exports.updateUserInfo = async (req, res, next) => {
  try {
    const userInfo = await UserInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!userInfo) {
      return res.status(404).json({
        success: false,
        data: `user with id ${req.params.id} not found`,
      });
    }
    res.status(201).json({
      success: true,
      data: userInfo,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: `user with id ${req.params.id} not found`,
    });
  }
};

//@desc  delete user info
//@route Delete/api/user/:id
exports.deleteUserInfo = async (req, res, next) => {
  try {
    const userInfo = await UserInfo.findByIdAndDelete(req.params.id);

    if (!userInfo) {
      return res.status(404).json({
        success: false,
        data: `user with id ${req.params.id} not found`,
      });
    }
    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: `user with id ${req.params.id} not found`,
    });
  }
};
