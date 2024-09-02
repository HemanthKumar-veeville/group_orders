import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import dealSlice from "./features/deals/dealSlice";
import messageSlice from "./features/messages/messageSlice";
import notificationSlice from "./features/notifications/notificationSlice";
import orderSlice from "./features/orders/orderSlice";
import reviewSlice from "./features/reviews/reviewSlice";
import userSlice from "./features/user/userSlice";
import supportSlice from "./features/support/supportSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    deals: dealSlice,
    messages: messageSlice,
    notifications: notificationSlice,
    orders: orderSlice,
    reviews: reviewSlice,
    user: userSlice,
    support: supportSlice,
  },
});

export default store;
