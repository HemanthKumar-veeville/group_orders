import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/helperMethods";

export const submitSupportRequest = createAsyncThunk(
  "support/submitSupportRequest",
  async (requestData) => {
    const response = await axiosInstance.post("/support/requests", requestData);
    return response.data;
  }
);

export const fetchSupportRequests = createAsyncThunk(
  "support/fetchSupportRequests",
  async () => {
    const response = await axiosInstance.get("/support/requests");
    return response.data;
  }
);

const supportSlice = createSlice({
  name: "support",
  initialState: {
    requests: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportRequests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSupportRequests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.requests = action.payload;
      })
      .addCase(fetchSupportRequests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitSupportRequest.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      });
  },
});

export default supportSlice.reducer;
