import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Deals from "./pages/Deals";
import DealDetails from "./pages/DealDetails";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import Support from "./pages/Support";
import AdminUserManagement from "./pages/AdminUserManagement";
import AdminDealAnalytics from "./pages/AdminDealAnalytics";
import AdminUserAnalytics from "./pages/AdminUserAnalytics";
import ReviewSubmission from "./pages/ReviewSubmission";
import ChatPage from "./pages/ChatPage";
import Settings from "./pages/Settings";
import InviteManagement from "./pages/InviteManagement";
import PaymentProcessing from "./pages/PaymentProcessing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Logout from "./pages/Logout";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "./features/auth/authSlice";
import { fetchDeals } from "./features/deals/dealSlice";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const deals = useSelector((state) => state.deals);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsUserLoggedIn(!!token);
    dispatch(fetchDeals());
  }, [token]);

  useEffect(() => {
    const userToken = localStorage.getItem("authToken");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      dispatch(setUserDetails({ user, token: userToken }));
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isUserLoggedIn ? (
              <Dashboard user={user} deals={deals} />
            ) : (
              <Landing />
            )
          }
        />
        <Route path="/deals" element={<Deals deals={deals} />} />
        <Route path="/deals/:id" element={<DealDetails />} />
        <Route path="/orders" element={<OrderHistory deals={deals} />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/deal-analytics" element={<AdminDealAnalytics />} />
        <Route path="/admin/user-analytics" element={<AdminUserAnalytics />} />
        <Route path="/review/:dealId" element={<ReviewSubmission />} />
        <Route path="/chat/:dealId" element={<ChatPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invite-management" element={<InviteManagement />} />
        <Route path="/payment-processing" element={<PaymentProcessing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
