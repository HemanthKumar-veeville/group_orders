import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/helperMethods";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (dealId) => {
    const response = await axiosInstance.get(`/deals/${dealId}/reviews`);
    return response.data;
  }
);

export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async ({ dealId, review }) => {
    const response = await axiosInstance.post(
      `/deals/${dealId}/reviews`,
      review
    );
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export default reviewSlice.reducer;
