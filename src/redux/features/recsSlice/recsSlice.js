import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_DISLIKE, API_LIKE, API_RECS } from "../../../helpers/consts";

export const getRecs = createAsyncThunk(
  "recs/getRecs",
  async function (_, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios(API_RECS, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likeUser = createAsyncThunk(
  "recs/likeUser",
  async function (data, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const response = await axios.post(API_LIKE, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dislikeUser = createAsyncThunk(
  "recs/likeUser",
  async function (data, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const response = await axios.post(API_DISLIKE, data, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  recs: [],
  error: null,
  loading: null,
};

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const setLoading = (state, action) => {
  state.status = "loading";
  state.error = null;
};

const recsSlice = createSlice({
  name: "recs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRecs.pending, setLoading)
      .addCase(getRecs.fulfilled, (state, action) => {
        state.recs = action.payload;
        state.status = "resolved";
        state.error = null;
      })
      .addCase(getRecs.rejected, setError)
      .addCase(likeUser.pending, setLoading)
      .addCase(likeUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
      })
      .addCase(likeUser.rejected, setError);
    // .addCase(dislikeUser.pending, setLoading)
    // .addCase(dislikeUser.fulfilled, (state, action) => {
    //   state.status = "resolved";
    //   state.error = null;
    // })
    // .addCase(dislikeUser.rejected, setError);
  },
});

export default recsSlice.reducer;
