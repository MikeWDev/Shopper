import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingUp from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_baner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_baner from "./Components/Assets/banner_kids.png";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_SECRET}`,
    authDomain: "shopper-97a66.firebaseapp.com",
    projectId: "shopper-97a66",
    storageBucket: "shopper-97a66.appspot.com",
    messagingSenderId: "213846033423",
    appId: "1:213846033423:web:0fba41ebec42c43b080f7a",
    measurementId: "G-1PTFZ69XY8",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_baner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="woman" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_baner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
