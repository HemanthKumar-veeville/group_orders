import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals } from "../features/deals/dealSlice";
import OrderForm from "./OrderForm";

const DealList = ({ searchTerm, sortCriteria }) => {
  const dispatch = useDispatch();
  const { deals, status, error } = useSelector((state) => state.deals);
  const [selectedDeal, setSelectedDeal] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDeals());
    }
  }, [status, dispatch]);

  // Filter deals based on search term
  let filteredDeals = deals;
  if (searchTerm) {
    filteredDeals = filteredDeals.filter((deal) =>
      deal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort deals based on selected criteria
  if (sortCriteria === "popularity") {
    // Example: Sort by popularity logic (you'll need to define this)
  } else if (sortCriteria === "deadline") {
    // Example: Sort by deadline logic (you'll need to define this)
  } else if (sortCriteria === "price") {
    // Example: Sort by price logic (you'll need to define this)
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleDealClick = (deal) => {
    setSelectedDeal(deal);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {selectedDeal && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Place Order for {selectedDeal.name}
          </h3>
          <OrderForm dealId={selectedDeal.id} />
        </div>
      )}

      {filteredDeals.length === 0 ? (
        <div>No deals found</div>
      ) : (
        <ul>
          {filteredDeals.map((deal) => (
            <li
              key={deal.id}
              className="mb-4 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => handleDealClick(deal)}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{deal.name}</span>
                <span className="text-custom-accent">
                  ${deal.totalAmount.toFixed(2)}
                </span>
                <span className="text-sm text-gray-600">{deal.status}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DealList;
