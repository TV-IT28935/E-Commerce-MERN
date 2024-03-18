const express = require("express");
const {
  createUser,
  loginUser,
  getUsers,
  putUserApi,
  getUser,
  deleteUserApi,
  refreshToken,
  logoutUser
} = require("../controllers/UserController");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getProductsApi,
  getProductByIdApi,
  postProductApi,
  putProductApi,
  deleteProductApi,
} = require("../controllers/ProductController");
const router = express.Router();

// User
router.get("/users", authMiddleware, getUsers);
router.get("/users/:id", authMiddleware, getUser);
router.post("/users", createUser);
router.put("/users/:id", putUserApi);
router.delete("/users/:id", authMiddleware, deleteUserApi);
router.post("/refresh-token", refreshToken);

// login
router.post("/sign-in", loginUser);
router.post("/log-out", logoutUser);


// Product
router.get("/products", getProductsApi);
router.get("/products/:id", getProductByIdApi);
router.post("/products", postProductApi);
router.put("/products/:id", putProductApi);
router.delete("/products/:id", deleteProductApi);

module.exports = router;
