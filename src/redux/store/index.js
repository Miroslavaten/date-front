import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/userSlice/authSlice";
import userProfileSlice from "../features/userProfileSlice/userProfileSlice";
import userSlice from "../features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    user: userSlice,
    auth: authSlice,
  },
});
