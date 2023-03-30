import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_RECS } from "../../../helpers/consts";

export const getRecs = createAsyncThunk(
  "recs/getRecs",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios(API_RECS);
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
      .addCase(getRecs.rejected, setError);
  },
});

export default recsSlice.reducer;
