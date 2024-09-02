import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders, fetchMyOrders } from "../features/orders/orderSlice";
import axiosInstance from "../utils/helperMethods";

const OrderList = ({ deals }) => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);
  const user = useSelector((state) => state.auth.user);

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
    try {
      await axiosInstance.post("/payments/charge-saved-method", { dealId });
      await dispatch(fetchAllOrders()); // Refresh the orders after charging
    } catch (err) {
      console.error("Failed to trigger auto-debit:", err.message);
    }
  };

  const groupedOrders = orders?.length && groupOrdersByDeal(orders);

  if (status === "loading") {
    return <div className="text-custom-accent">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    orders?.length && (
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
                      handleConfirmAutoDebit(groupedOrders[dealName][0]?.id)
                    }
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
                      <span className="w-1/4 text-left text-custom-accent">
                        ${order?.amount?.toFixed(2)}
                      </span>
                      <span className="w-1/4 text-right text-sm text-gray-600">
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
