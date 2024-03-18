import { createSlice } from "@reduxjs/toolkit";
import { updateUserAction } from "../action/userAction";

const initialState = {
  name: "",
  email: "",
  phone: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: updateUserAction
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
