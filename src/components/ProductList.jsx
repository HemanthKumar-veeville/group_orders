import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Products in Order
      </h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <span className="font-semibold text-custom-dark">
              {product.name}
            </span>{" "}
            -
            <span className="text-gray-700">
              {" "}
              {product.quantity} x ${product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
