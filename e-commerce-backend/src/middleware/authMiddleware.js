const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = (request, response, next) => {
  const token = request.headers.token.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return response.status(404).json({
        message: "The authentication",
        status: "ERROR",
        data: err.message,
      });
    }
    const { payload } = user;
    if (payload.isAdmin) {
      next();
    } else {
      return response.status(404).json({
        message: "The authentication",
        status: "ERROR",
      });
    }
  });
};

module.exports = authMiddleware;
