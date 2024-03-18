const e = require("express");
const {
  createUserService,
  loginUserService,
  putUserService,
} = require("../services/UserService");
const User = require("../models/User");
const { refreshTokenService } = require("../services/JwtService");

const createUser = async (request, response) => {
  try {
    const { name, email, password, confirmPassword, phone } = request.body;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isCheckEmail = regex.test(email);
    if (!name && !email && !password && !confirmPassword && !phone) {
      return response
        .status(400)
        .json({ status: "ERR", message: "The input is required" });
    } else if (!isCheckEmail) {
      return response
        .status(400)
        .json({ status: "ERR", message: "The input is email" });
    } else if (password !== confirmPassword) {
      return response.status(400).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }
    const result = await createUserService(request.body);
    return response.status(200).json(result);
  } catch (error) {
    return response.status(400).json({
      status: "ERR",
      message: error.message,
      data: null,
    });
  }
};

const loginUser = async (request, response) => {
  console.log(">>>> cookie:", request.cookies);
  try {
    const { email, password } = request.body;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isCheckEmail = regex.test(email);
    if (!email && !password) {
      return response
        .status(400)
        .json({ status: "ERR", message: "The input is required" });
    } else if (!isCheckEmail) {
      return response
        .status(400)
        .json({ status: "ERR", message: "The input is email" });
    }
    const result = await loginUserService(request.body);
    const { refresh_token, ...newResult } = result;
    response.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: true,
    });
    return response.status(200).json(newResult);
  } catch (error) {
    return response
      .status(400)
      .json({ status: "ERR", message: error.message, data: null });
  }
};

const getUsers = async (request, response) => {
  const { limit, page, sort } = request.query;
  console.log(request.query);
  const totalUser = await User.countDocuments();

  const users = await User.find({})
    .limit(limit)
    .skip((page - 1) * limit);
  return response.status(200).json({
    status: "OK",
    message: "Get all users successfully!",
    data: users,
    total: totalUser,
    pageCurrent: +page,
    totalPage: Math.ceil(totalUser / limit),
  });
};

const getUser = async (request, response) => {
  const userId = request.params.id;
  const user = await User.findOne({ _id: userId }).exec();
  console.log(user);
  if (!user) {
    return response.status(204).json({});
  }
  return response.status(200).json({
    status: "OK",
    message: "Get user successfully!",
    data: user,
  });
};

const putUserApi = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return response
        .status(400)
        .json({ status: "ERR", message: "User not defind", data: null });
    }
    const result = await putUserService(request.body, userId);
    return response
      .status(200)
      .json({ status: "OK", message: "Update successfully!", data: result });
  } catch (error) {
    return response
      .status(400)
      .json({ status: "ERR", message: error.message, data: null });
  }
};

const deleteUserApi = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return response
        .status(400)
        .json({ status: "ERR", message: "User not defind", data: null });
    }
    const result = await User.findByIdAndDelete({ _id: userId });
    return response
      .status(200)
      .json({ status: "OK", message: "Delete successfully!", data: result });
  } catch (error) {
    return response
      .status(400)
      .json({ status: "ERR", message: error.message, data: null });
  }
};
const refreshToken = async (request, response) => {
  console.log("cookies:", request.cookies);
  try {
    // const token = request.headers.token.split(" ")[1];
    // if (!token) {
    //   return response.status(400).json({
    //     status: "ERR",
    //     message: "The token is required",
    //     access_token: null,
    //   });
    // }
    // const result = await refreshTokenService(token);
    // if (!result) {
    //   return response.status(400).json({
    //     status: "ERR",
    //     message: "Refresh token faild!",
    //     access_token: result,
    //   });
    // }
    return response.status(200).json({
      status: "OK",
      message: "Refresh token successfully!",
      access_token: result,
    });
  } catch (error) {
    return response
      .status(400)
      .json({ status: "ERR", message: error.message, access_token: null });
  }
};

const logoutUser = (request, response) => {
  try {
    request.clearCookie("refresh_token")
    return response.status(200).json({
      status: "OK",
      message: "Log out successfully!",
    });
  } catch (error) {
    return response.status(404).json({
      status: "OK",
      message: "Refresh token fail!",
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  loginUser,
  putUserApi,
  getUser,
  deleteUserApi,
  refreshToken,
  logoutUser,
};
