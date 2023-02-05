import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  userName: null,
  email: null,
  firstName: null,
  lastName: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    CLEAR_USER: (state) => {
      state.id = null;
      state.userName = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { SET_USER, CLEAR_USER } = userSlice.actions;
export const selectUser = (state) => state.userReducer;
export const userReducer = userSlice.reducer;
