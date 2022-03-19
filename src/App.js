import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignIn";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <Fragment>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="About" element={<About />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Fragment>
  );
}

export default App;
