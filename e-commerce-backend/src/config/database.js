const { default: mongoose } = require("mongoose");
require("dotenv").config;
const dbState = [
  {
    value: 0,
    label: "Disconnected",
  },
  {
    value: 1,
    label: "Connected",
  },
  {
    value: 2,
    label: "Connecting",
  },
  {
    value: 3,
    label: "Disconnecting",
  },
];

const connection = async () => {
  const options = {
    dbName : process.env.DB_NAME,
  };
  await mongoose.connect(process.env.DB_HOST_USER_PASSWORD, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value === state).label, "to db"); // connected to db
};

module.exports = connection;
