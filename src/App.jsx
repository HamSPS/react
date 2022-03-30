import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Pay } from "./pages/Pay";
// import { Success } from "./pages/Success";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/pay" element={<Pay />} />
    //     <Route path="/success" element={<Success />} />
    //   </Routes>
    // </BrowserRouter>

    <Home />
  );
};

export default App;
