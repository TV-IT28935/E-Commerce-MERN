const Product = require("../models/Product");
const bcrypt = require("bcrypt");
const createProductService = async (requestBody) => {
  const { name, image, type, price, countInStock, rating, description } =
    requestBody;
  try {
    const checkProduct = await Product.find({
      name: name,
      description: description,
    });
    console.log(checkProduct);

    if (checkProduct) {
      return {
        status: "ERR",
        message: "Product name or description duplicated",
        data: null,
      };
    }

    const product = await Product.create({
      ...requestBody,
    });
    if (product) {
      return {
        status: "OK",
        message: "SUCCESS",
        data: product,
      };
    }
    return {
      status: "ERR",
      message: "Add product failure",
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

const getProductsService = async (limit, page) => {
  const products = await Product.find({})
    .limit(limit)
    .skip((page - 1) * limit);
  return products;
};

module.exports = {
  createProductService,
  getProductsService,
};
