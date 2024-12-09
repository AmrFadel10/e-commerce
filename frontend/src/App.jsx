import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import CompareProducts from "./pages/CompareProducts";
import WishListPage from "./pages/WishListPage";
// import Signin from "./pages/Signin";
import Activation from "./pages/Activation";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
// import EventsPage from "./pages/EventsPage";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import SingleBlog from "./pages/SingleBlog";
import Payment from "./pages/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import request from "./utils/baseUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await request.get("/payment/get-stripe-api-key");
    setStripeApiKey(data.stripeApiKey);
  }

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Routes>
              {" "}
              <Route path="/payment" element={<Layout />}>
                <Route
                  index
                  element={
                    user ? (
                      <Payment />
                    ) : (
                      <Navigate to={"/login"} replace={true} />
                    )
                  }
                />
              </Route>
            </Routes>
          </Elements>
        )}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/profile"
              element={
                user ? <Profile /> : <Navigate to={"/login"} replace={true} />
              }
            />
            <Route path="/products" element={<OurStore />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route
              path="/cart"
              element={
                user ? <Cart /> : <Navigate to={"/login"} replace={true} />
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare" element={<CompareProducts />} />
            <Route
              path="/wishlist"
              element={
                user ? (
                  <WishListPage />
                ) : (
                  <Navigate to={"/login"} replace={true} />
                )
              }
            />
            {/* <Route path="/events" element={<EventsPage />} /> */}
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/terms-condition" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/activation/:activationToken" element={<Activation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
