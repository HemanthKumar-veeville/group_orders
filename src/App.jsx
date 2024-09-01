import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<DealDetails />} />
        <Route path="/orders/history" element={<OrderHistory />} />
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
