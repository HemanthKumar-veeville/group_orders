import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProfileDetails from "../components/ProfileDetails";
import PaymentMethods from "../components/PaymentMethods";
import ChangePasswordForm from "../components/ChangePasswordForm";

const UserProfile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: "1234 Elm Street",
  };

  const paymentMethods = [
    {
      id: "pm_1",
      cardBrand: "Visa",
      cardLast4: "4242",
      expiryMonth: "12",
      expiryYear: "2024",
    },
    {
      id: "pm_2",
      cardBrand: "MasterCard",
      cardLast4: "1234",
      expiryMonth: "05",
      expiryYear: "2023",
    },
  ];

  const handleAddPaymentMethod = () => {
    // Logic to add a payment method
  };

  const handleRemovePaymentMethod = (id) => {
    // Logic to remove a payment method
  };

  const handleChangePassword = (passwords) => {
    // Logic to change password
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            User Profile
          </h2>

          <ProfileDetails user={user} />

          <PaymentMethods
            methods={paymentMethods}
            onAdd={handleAddPaymentMethod}
            onRemove={handleRemovePaymentMethod}
          />

          <ChangePasswordForm onChangePassword={handleChangePassword} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;
