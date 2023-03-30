import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_PROFILE } from "../../../helpers/consts";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// export const navigateToRegister = () => {
//   navigate("/register");
// };

export const getUsers = createAsyncThunk(
  "userProfile/getUsers",

  async function (_, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios(API_PROFILE, config);
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
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios(`${API_PROFILE}${id}`, config);
      // if (!response.ok) {
      //   throw new Error("Server Error: cannot fetch the user");
      // }
      console.log("get details", response);

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

      console.log(response.data);
      // if (!response.ok) {
      //   throw new Error("Server Error: cannot add the user");
      // }
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
  userDetails: null,
  status: null,
  error: null,
  loading: false,
  hasProfile: null,
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
        state.hasProfile = true;
        console.log(state.hasProfile, "resolved");

        // navigate("/");
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        setError();
        // navigate("/register");
        state.hasProfile = false;
        console.log(state.hasProfile, "rejected");
      })
      .addCase(addUser.pending, setLoading)
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.users = [...state.users, action.payload];
        console.log(state.users);
        console.log(action.payload);
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
            return action.payload;
          }
          return user;
        });
      })
      .addCase(editUserDetails.rejected, setError);
  },
});

export default userSlice.reducer;
