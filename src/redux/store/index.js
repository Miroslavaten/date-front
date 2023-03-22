import { configureStore } from "@reduxjs/toolkit";
import userProfileSlice from "../features/userProfileSlice/userProfileSlice";
import userSlice from "../features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    user: userSlice,
  },
});
