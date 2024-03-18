const User = require("../models/User");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");
const createUserService = async (requestBody) => {
  const { name, email, password, confirmPassword, phone } = requestBody;

  try {
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return {
        status: "OK",
        message: "User duplicated",
        data: null,
      };
    }

    const user = await User.create({
      ...requestBody,
      password: bcrypt.hashSync(password, 10),
    });
    if (user) {
      return {
        status: "OK",
        message: "SUCCESS",
        data: user,
      };
    }
    return {
      status: "ERR",
      message: "Add user failure",
      data: null,
    };
  } catch (error) {
    return {
      status: "ERR",
      message: error.message,
      data: null,
    };
  }
};

const loginUserService = async (requestBody) => {
  const { email, password } = requestBody;
  try {
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      return {
        status: "ERR",
        message: "The user is not defind",
      };
    }
    const comparePassword = bcrypt.compareSync(password, checkUser.password);
    if (!comparePassword) {
      return {
        status: "ERR",
        message: "The password is not correct",
      };
    }
    const access_token = await genneralAccessToken({
      id: checkUser._id,
      isAdmin: checkUser.isAdmin,
    });
    const refresh_token = await genneralRefreshToken({
      id: checkUser._id,
      isAdmin: checkUser.isAdmin,
    });
    return {
      status: "OK",
      message: "SUCCESS",
      access_token: access_token,
      refresh_token: refresh_token
    };
  } catch (error) {
    return {
      status: "ERR",
      message: error.message,
    };
  }
};

const putUserService = async (requestBody, userId) => {
  const result = await User.updateOne({ _id: userId }, { ...requestBody });
  return result;
};

module.exports = {
  createUserService,
  loginUserService,
  putUserService,
};
