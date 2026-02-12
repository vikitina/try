import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    thema: "green",
    lang: "eng"
  },
  reducers: {
    changeThema: (state, action) => {
      state.thema = action.payload
    }
  }
});

export const {changeThema} = settingsSlice.actions;

export default settingsSlice.reducer;