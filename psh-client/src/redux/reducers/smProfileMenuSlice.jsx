import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProfileMenu: false,
  isFaqMenu: true,
};
const profileMenuSlice = createSlice({
  name: "profileMenu",
  initialState,

  reducers: {
    placeProfileMenu: (state, action) => {
      state.isProfileMenu = action.payload;
    },
    placeFaqMenu: (state, action) => {
      state.isFaqMenu = action.payload;
    },
  },
});

export const { placeProfileMenu, placeFaqMenu } = profileMenuSlice.actions;
export default profileMenuSlice.reducer;
