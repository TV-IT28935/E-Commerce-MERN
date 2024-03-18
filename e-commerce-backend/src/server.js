const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/apiRouter");
const connection = require("./config/database");
const cors = require("cors");
var cookieParser = require('cookie-parser')
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
// config request.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.use(cookieParser())
app.use("/v1/api", router);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log("Server is running in port ", port);
    });
  } catch (error) {
    console.log(">>>> Error connect to DB: ", error);
  }
})();
