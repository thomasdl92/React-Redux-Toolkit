import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
export const store = configureStore({
  reducer: combineReducers({
    counterState: counterReducer
    // todoStat: todoReducer
  })
});
