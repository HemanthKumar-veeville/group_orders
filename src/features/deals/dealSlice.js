import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/helperMethods";

export const fetchDeals = createAsyncThunk("deals/fetchDeals", async () => {
  const response = await axiosInstance.get("/deals");
  return response.data;
});

export const fetchDealDetails = createAsyncThunk(
  "deals/fetchDealDetails",
  async (dealId) => {
    const response = await axiosInstance.get(`/deals/${dealId}`);
    return response.data;
  }
);

export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (dealData) => {
    const response = await axiosInstance.post("/deals", dealData);
    return response.data;
  }
);

export const updateDeal = createAsyncThunk(
  "deals/updateDeal",
  async ({ dealId, dealData }) => {
    const response = await axiosInstance.put(`/deals/${dealId}`, dealData);
    return response.data;
  }
);

export const deleteDeal = createAsyncThunk(
  "deals/deleteDeal",
  async (dealId) => {
    await axiosInstance.delete(`/deals/${dealId}`);
    return dealId;
  }
);

export const finalizeDeal = createAsyncThunk(
  "deals/finalizeDeal",
  async (dealId) => {
    const response = await axiosInstance.post(`/deals/finalize/${dealId}`);
    return response.data;
  }
);

const dealSlice = createSlice({
  name: "deals",
  initialState: {
    deals: [],
    selectedDeal: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDealDetails.fulfilled, (state, action) => {
        state.selectedDeal = action.payload;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.deals.push(action.payload);
      })
      .addCase(updateDeal.fulfilled, (state, action) => {
        const index = state.deals.findIndex(
          (deal) => deal.id === action.payload.id
        );
        state.deals[index] = action.payload;
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        state.deals = state.deals.filter((deal) => deal.id !== action.payload);
      })
      .addCase(finalizeDeal.fulfilled, (state, action) => {
        const index = state.deals.findIndex(
          (deal) => deal.id === action.payload.dealId
        );
        if (index !== -1) {
          state.deals[index].isFinalized = true;
        }
      });
  },
});

export default dealSlice.reducer;
