import React, { useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./context/ThemeContext";
import "./App.css";
const Home = lazy(() => import("./pages/home/Home"));
const Product = lazy(() => import("./pages/product/Product"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Loader = lazy(() => import("./components/loader/Loader"));
const All = lazy(() => import("./pages/categories/all/All"));
const Furniture = lazy(() => import("./pages/categories/furniture/Furniture"));
const Electronics = lazy(() =>
  import("./pages/categories/electronics/Electronics")
);
const Lamps = lazy(() => import("./pages/categories/lamps/Lamps"));
const Kitchen = lazy(() => import("./pages/categories/kitchen/Kitchen"));
const Chairs = lazy(() => import("./pages/categories/chairs/Chairs"));
const Skin = lazy(() => import("./pages/categories/skin/Skin"));

function App() {
  const { pending } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
