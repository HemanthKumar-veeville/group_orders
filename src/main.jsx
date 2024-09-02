import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store"; // Make sure your store is correctly exported from './store'
import "./index.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PplNp04KHQUtznoy8HmY5meaJK4aZgRjwuckLfjquqCSJMvfXEjacj3pADbzg2SDbNuWr0zRhrFymRRstAjzh3S00USzDZqAJ"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </StrictMode>
);
