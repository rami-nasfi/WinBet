import { createSlice } from "@reduxjs/toolkit";

const platformSlice = createSlice({
  name: "platforme",
  initialState: { platforme_type: "" },
  reducers: {
    setPlatforme(state, action) {
      state = action.payload;
    },
  },
});

export const { desktop, mobile } = platformSlice.actions;

export default platformSlice.reducer;
