import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default {
  user: userReducer,
};
