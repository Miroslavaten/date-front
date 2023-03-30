import React, { useEffect } from "react";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  LOGIN_API,
  REFRESH_TOKEN_API,
  REGISTER_API,
} from "../../../helpers/consts";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
  id: "",
};

export const signUpUser = createAsyncThunk("user/signUpUser", async (user) => {
  const res = await fetch(REGISTER_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await res.json();
});

export const signInUser = createAsyncThunk("user/signInUser", async (user) => {
  const res = await fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await res.json();
});

export const checkAuth = createAsyncThunk("user/checkAuth", async () => {
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  try {
    let res = await axios.post(REFRESH_TOKEN_API, {
      refresh: token.refresh,
    });
    localStorage.setItem(
      "token",
      JSON.stringify({ refresh: token.refresh, access: res.data.access })
    );
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // REGISTER*************************************

    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, payload) => {
      state.loading = false;

      // if (error) {
      //   state.error = error;
      // } else {
      //   state.msg = msg;
      // }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // LOGIN*************************************

    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, { payload: { refresh, access } }) => {
      console.log(refresh);
      state.loading = false;

      // if (error) {
      //   state.error = error;
      // } else {
      //   state.msg = msg;
      //   state.token = token;
      //   state.user = user;

      // localStorage.setItem("msg", msg);
      // localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify({ access, refresh }));
      // }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
