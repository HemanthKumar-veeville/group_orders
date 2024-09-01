import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get("/api/notifications");
    return response.data;
  }
);

export const markNotificationAsRead = createAsyncThunk(
  "notifications/markNotificationAsRead",
  async (notificationId) => {
    const response = await axios.put(
      `/api/notifications/${notificationId}/read`
    );
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        const index = state.notifications.findIndex(
          (notif) => notif.id === action.payload.id
        );
        if (index !== -1) {
          state.notifications[index].isRead = true;
        }
      });
  },
});

export default notificationSlice.reducer;
