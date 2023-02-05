import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
