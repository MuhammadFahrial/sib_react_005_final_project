import React from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
// import "./App.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NewsListAbout from "./components/pages/AboutPage";
import AboutPage from "./components/pages/AboutPage";
import DetailProduct from "./components/pages/DetailProduct";
import CartPage from "./components/pages/CartPage";
import ProtectedRoute from "./components/atoms/ProtectedRoute/ProtectedRoute";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<DetailProduct />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
