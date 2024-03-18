const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genneralAccessToken = async (payload) => {
  const accessToken = jwt.sign(
    {
      payload: payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "20s" }
  );
  return accessToken;
};

const genneralRefreshToken = async (payload) => {
  const accessToken = jwt.sign(
    {
      payload: payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  return accessToken;
};

const refreshTokenService = async (token) => {
  try {
    let accessToken = null;
    await jwt.verify(
      token,
      process.env.REFRESH_TOKEN,
      async function (err, user) {
        if (err) {
          console.log(err.message);
          return null;
        }
        accessToken = await genneralAccessToken(user.payload);
      }
    );
    return accessToken;
  } catch (error) {
    return {
      status: "ERR",
      message: error.message,
      data: null,
    };
  }
};
module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
  refreshTokenService,
};
