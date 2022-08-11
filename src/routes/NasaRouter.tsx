import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import ApodListing from "../pages/apodListing/ApodListing";
import Contact from "../pages/contact/Contact";
import NotFoundPage from "../pages/error-page/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signUp/SignUp";
const NasaRouter = () => {
  return (
    <Routes>
      <Route path="/apod" element={<ApodListing />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default NasaRouter;
