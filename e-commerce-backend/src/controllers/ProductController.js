const Product = require("../models/Product");
const {
  createProductService,
  getProductsService,
} = require("../services/ProductService");

module.exports = {
  getProductsApi: async (request, response) => {
    const { limit, page, sort } = request.query;
    try {
      const totalProduct = await Product.countDocuments();
      const products = await getProductsService(
        (limit) || 4,
        (page) || 1,
        (sort) || "asc"
      );
      return response.status(200).json({
        status: "OK",
        message: "Get all products",
        data: products,
        total: totalProduct,
        pageCurrent: page,
        totalPage: Math.ceil(totalProduct / limit),
      });
    } catch (error) {
      return response.status(400).json({
        status: "ERR",
        message: error.message,
        data: null,
      });
    }
  },
  getProductByIdApi: (request, response) => {
    response.send("hello");
  },
  postProductApi: async (request, response) => {
    try {
      const { name, image, type, price, countInStock, rating, description } =
        request.body;
      if (
        !name &&
        !image &&
        !type &&
        !price &&
        !countInStock &&
        !rating &&
        !description
      ) {
        return response
          .status(400)
          .json({ status: "ERR", message: "The input is required" });
      }
      const result = await createProductService(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json({
        status: "ERR",
        message: error.message,
        data: null,
      });
    }
  },
  putProductApi: (request, response) => {
    response.send("hello");
  },
  deleteProductApi: (request, response) => {
    response.send("hello");
  },
};
