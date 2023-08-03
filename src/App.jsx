import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import { Context } from "./context/ThemeContext";
import All from "./pages/categories/all/All";
import Furniture from "./pages/categories/furniture/Furniture";
import Electronics from "./pages/categories/electronics/Electronics";
import Lamps from "./pages/categories/lamps/Lamps";
import Kitchen from "./pages/categories/kitchen/Kitchen";
import Chairs from "./pages/categories/chairs/Chairs";
import Skin from "./pages/categories/skin/Skin";

function App() {
  const { pending } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/all" element={<All />} />
          <Route path="/categories/furnitures" element={<Furniture />} />
          <Route path="/categories/electronics" element={<Electronics />} />
          <Route path="/categories/lamps" element={<Lamps />} />
          <Route path="/categories/kitchen" element={<Kitchen />} />
          <Route path="/categories/chairs" element={<Chairs />} />
          <Route path="/categories/skin-care" element={<Skin />} />
          <Route path="/categories/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
