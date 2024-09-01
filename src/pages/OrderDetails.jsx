import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrderDetails from "../components/OrderDetails";
import ProductList from "../components/ProductList";
import OrderStatus from "../components/OrderStatus";
import PaymentDetails from "../components/PaymentDetails";

const OrderDetailsPage = () => {
  const order = {
    id: "12345",
    date: "2024-09-01",
    customerName: "John Doe",
    totalAmount: 150.75,
    status: "shipped",
    products: [
      { id: "p1", name: "Product 1", quantity: 2, price: 25.0 },
      { id: "p2", name: "Product 2", quantity: 1, price: 100.75 },
    ],
    payment: {
      method: "Credit Card",
      date: "2024-08-31",
      amount: 150.75,
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Order Details
          </h2>

          <OrderDetails order={order} />
          <ProductList products={order.products} />
          <OrderStatus status={order.status} />
          <PaymentDetails payment={order.payment} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrderDetailsPage;
