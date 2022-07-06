import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "../context/UserContext";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Search from "../pages/Search";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="p/:name/:id" element={<Product />}></Route>
        <Route path="/login" element={<PrivateRoutes redirect="/dashboard" ><Login/></PrivateRoutes>}></Route>
        <Route path="/dashboard" element={<PrivateRoutes redirect="/login" ><Dashboard/></PrivateRoutes>}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
