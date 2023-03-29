import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/userSlice/authSlice";
import userProfileSlice from "../features/userProfileSlice/userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    auth: authSlice,
  },
});
