import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders, fetchMyOrders } from "../features/orders/orderSlice";
import axiosInstance from "../utils/helperMethods";
import { CirclesWithBar } from "react-loader-spinner";

const OrderList = ({ deals }) => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);
  const user = useSelector((state) => state.auth.user);
  const [isPaymentProcessing, setIsPaymentProcessing] = React.useState(false);
  const [isRefreshProcessing, setIsRefreshProcessing] = React.useState(false);

  useEffect(() => {
    if (user?.role === "Organizer") {
      dispatch(fetchAllOrders());
    } else {
      dispatch(fetchMyOrders());
    }
  }, [dispatch, user]);

  const groupOrdersByDeal = (orders) => {
    return orders.reduce((groupedOrders, order) => {
      const dealName = order?.Deal?.name;
      if (!groupedOrders[dealName]) {
        groupedOrders[dealName] = [];
      }
      groupedOrders[dealName].push(order);
      return groupedOrders;
    }, {});
  };

  const handleConfirmAutoDebit = async (dealId) => {
    setIsPaymentProcessing(true);
    console.log("Triggering auto-debit for deal:", dealId);
    try {
      await axiosInstance.post("/payments/charge-saved-method", { dealId });
      await dispatch(fetchAllOrders()); // Refresh the orders after charging
    } catch (err) {
      console.error("Failed to trigger auto-debit:", err.message);
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  const handleRefresh = async (dealId) => {
    setIsRefreshProcessing(true);
    console.log("Triggering status refresh for deal:", dealId);
    try {
      await axiosInstance.post("/payments/update-payment-status", { dealId });
      await dispatch(fetchAllOrders()); // Refresh the orders after charging
    } catch (err) {
      console.error("Failed to status refresh:", err.message);
    } finally {
      setIsRefreshProcessing(false);
    }
  };

  const groupedOrders = orders?.length && groupOrdersByDeal(orders);

  if (status === "loading") {
    return <div className="text-custom-accent">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (isPaymentProcessing || isRefreshProcessing) {
    return (
      <div className="flex justify-center items-center h-64">
        <CirclesWithBar color="#f97316" height={80} width={80} />
      </div>
    );
  }
  return (
    orders?.length > 0 &&
    !isPaymentProcessing &&
    !isRefreshProcessing && (
      <div className="bg-custom-light shadow-md rounded-lg p-6">
        {Object.keys(groupedOrders).length === 0 ? (
          <div className="text-custom-dark">No orders found</div>
        ) : (
          Object.keys(groupedOrders).map((dealName) => (
            <div key={dealName} className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg text-custom-dark">
                  {dealName}
                </h2>
                {user?.role === "Organizer" && (
                  <button
                    onClick={() =>
                      handleRefresh(groupedOrders[dealName][0]?.dealId)
                    }
                    className=" bg-custom-accent text-white py-1 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
                    disabled={isRefreshProcessing}
                  >
                    Refresh
                  </button>
                )}
                {user?.role === "Organizer" && (
                  <button
                    onClick={() =>
                      handleConfirmAutoDebit(groupedOrders[dealName][0]?.dealId)
                    }
                    disabled={isPaymentProcessing}
                    className=" bg-custom-accent text-white py-1 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
                  >
                    Confirm
                  </button>
                )}
              </div>
              <ul>
                <li className="font-semibold mb-2">
                  <div className="flex justify-between text-custom-dark">
                    <span className="w-1/4 text-left">User Name</span>
                    <span className="w-1/4 text-left">Deal Name</span>
                    <span className="w-1/4 text-left">Amount</span>
                    <span className="w-1/4 text-left">Order Status</span>
                    <span className="w-1/4 text-right">Paid Status</span>
                  </div>
                </li>
                {groupedOrders[dealName].map((order) => (
                  <li
                    key={order.id}
                    className="mb-4 p-4 border-b border-gray-200 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between">
                      <span className="w-1/4 text-left font-semibold text-custom-dark">
                        {order?.User?.name}
                      </span>
                      <span className="w-1/4 text-left font-semibold text-custom-dark">
                        {order?.Deal?.name}
                      </span>
                      <span
                        className={`w-1/4 text-left ${
                          order?.isPaid
                            ? "text-green-600"
                            : "text-custom-accent"
                        }`}
                      >
                        ${order?.amount?.toFixed(2)}
                      </span>
                      <span
                        className={`w-1/4 text-left ${
                          order?.isPaid
                            ? "text-green-600"
                            : "text-custom-accent"
                        }`}
                      >
                        {order?.paymentIntent?.status}
                      </span>
                      <span
                        className={`w-1/4 text-right ${
                          order?.isPaid ? "text-green-600" : "text-gray-600"
                        }`}
                      >
                        {order?.isPaid ? "Paid" : "Unpaid"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    )
  );
};

export default OrderList;
