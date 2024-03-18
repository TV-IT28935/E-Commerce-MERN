import axios from "axios";

export const loginUser = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:3001/v1/api/sign-in",
      data
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const createUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:3001/v1/api/users", data);
    return result.data;
  } catch (error) {
    return error.response;
  }
};

export const getUserApi = async (id, access_token) => {
  try {
    const result = await axios.get(`http://localhost:3001/v1/api/users/${id}`, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });
    return result.data;
  } catch (error) {
    return error.response;
  }
};
