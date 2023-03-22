import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_PROFILE } from "../../../helpers/consts";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "userProfile/getUsers",

  async function (_, { rejectWithValue }) {
    try {
      // const response = await axios.get(API_PROFILE).then((res) => {
      //   console.log(res);
      //   return res.data;
      // });
      // const finalResponse = await response;
      // if (finalResponse.ok) {
      //   throw new Error("Server Error: cannot fetch users");
      // }
      // console.log(finalResponse);
      // return finalResponse.data;

      const response = await axios(API_PROFILE);
      if (response.ok) {
        throw new Error("Server Error: cannot fetch users");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "userProfile/getUserDetails",
  async function ({ id }, { rejectWithValue }) {
    try {
      const response = await axios(`${API_PROFILE}/${id}`);
      // if (!response.ok) {
      //   throw new Error("Server Error: cannot fetch the user");
      // }

      if (response.data) return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async function (user, { rejectWithValue }) {
    try {
      const response = await axios.post(API_PROFILE, user);

      console.log(response);
      if (!response.ok) {
        throw new Error("Server Error: cannot add the user");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`${API_PROFILE}/${id}`);
      console.log(response);
      // if (!response.ok) {
      //   throw new Error("Server Error: cannot delete the user");
      // }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUserDetails = createAsyncThunk(
  "users/editUserDetails",
  async function (newUserData, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.patch(
        `${API_PROFILE}/${newUserData.id}`,
        newUserData
      );
      console.log(response);
      // if (!response.ok) {
      //   throw new Error("Server Error: cannot fetch the user");
      // }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// const userDetails = {
//   user: "",
//   gender: "",
//   sexual_orientation: "",
//   description: "",
//   status: "",
//   interests: [],
//   birth_date: "",
//   age: "",
//   images: [],
// };

// const images = [
//   {
//     id: 0,
//     image: "string",
//     profile: 0,
//   },
//? ]; пример

const initialState = {
  users: [],
  userDetails: {},
  status: null,
  error: null,
  loading: false,
};

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const setLoading = (state, action) => {
  state.status = "loading";
  state.error = null;
};

const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const updatedUser = state.users.find(
        (user) => user.id === action.payload.id
      );
      state.userDetails = updatedUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, setLoading)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "resolved";
        state.error = null;
      })
      .addCase(getUsers.rejected, setError)
      .addCase(getUserDetails.pending, setLoading)
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.status = "resolved";
        state.userDetails = action.payload;
        state.error = null;
      })
      .addCase(getUserDetails.rejected, setError)
      .addCase(addUser.pending, setLoading)
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.users = state.users.push(action.payload);
        state.error = null;
      })
      .addCase(addUser.rejected, setError)
      .addCase(deleteUser.pending, setLoading)
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteUser.rejected, setError)
      .addCase(editUserDetails.pending, setLoading)
      .addCase(editUserDetails.fulfilled, (state, action) => {
        state.status = "resolved";
        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            user = action.payload;
          }
        });
      })
      .addCase(editUserDetails.rejected, setError);
  },
});

export default userSlice.reducer;