export const updateUserAction = (state, action) => {
    const { name, email, phone, access_token } = action.payload;
    state.name = name;
    state.email = email;
    state.phone = phone;
    state.access_token = access_token;
  }