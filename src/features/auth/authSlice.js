import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post("/api/auth/login", credentials);
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post("/api/auth/register", userData);
  return response.data;
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await axios.post("/api/auth/logout");
  return null;
});

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async () => {
    const response = await axios.get("/api/users/profile");
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (profileData) => {
    const response = await axios.put("/api/users/profile", profileData);
    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (passwords) => {
    const response = await axios.put("/api/users/change-password", passwords);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        // Handle password change success (e.g., display a success message)
      });
  },
});

export default authSlice.reducer;
