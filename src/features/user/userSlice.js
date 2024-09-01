import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    const response = await axios.get("/api/users/profile");
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (profileData) => {
    const response = await axios.put("/api/users/profile", profileData);
    return response.data;
  }
);

export const deleteUserProfile = createAsyncThunk(
  "user/deleteUserProfile",
  async () => {
    const response = await axios.delete("/api/users/profile");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(deleteUserProfile.fulfilled, (state) => {
        state.profile = null;
      });
  },
});

export default userSlice.reducer;
