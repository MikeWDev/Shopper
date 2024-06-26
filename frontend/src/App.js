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
    authDomain: "shopper-a6956.firebaseapp.com",
    projectId: "shopper-a6956",
    storageBucket: "shopper-a6956.appspot.com",
    messagingSenderId: "1005565344035",
    appId: "1:1005565344035:web:50a81fbb783c469918f496",
    measurementId: "G-T2KY4CC7YM",
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
