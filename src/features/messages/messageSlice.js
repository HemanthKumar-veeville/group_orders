import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (dealId) => {
    const response = await axios.get(`/api/deals/${dealId}/messages`);
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async ({ dealId, message }) => {
    const response = await axios.post(`/api/deals/${dealId}/messages`, message);
    return response.data;
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export default messageSlice.reducer;
