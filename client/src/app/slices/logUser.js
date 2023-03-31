import { createSlice } from "@reduxjs/toolkit";

export const logUser = createSlice({
  name: "logUser",

  initialState: {
    logUser: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.logUser = action.payload;
    },
  },
});

export const { setUser } = logUser.actions;
