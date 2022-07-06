import React from "react";

import "./base.css";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <UserProvider>
      <CartProvider>
      <AppRoutes />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
