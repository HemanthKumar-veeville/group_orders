import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (dealId) => {
    const response = await axios.get(`/api/orders`, { params: { dealId } });
    return response.data;
  }
);

export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (orderId) => {
    const response = await axios.get(`/api/orders/${orderId}`);
    return response.data;
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData) => {
    const response = await axios.post("/api/orders", orderData);
    return response.data;
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, orderData }) => {
    const response = await axios.put(`/api/orders/${orderId}`, orderData);
    return response.data;
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId) => {
    await axios.delete(`/api/orders/${orderId}`);
    return orderId;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    selectedOrder: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        state.orders[index] = action.payload;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload
        );
      });
  },
});

export default orderSlice.reducer;
