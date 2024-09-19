import { configureStore } from "@reduxjs/toolkit";
import platformeReducer from "./platformeSlice";

const store = configureStore({
  reducer: {
    platforme: platformeReducer,
  },
});

export default store;
