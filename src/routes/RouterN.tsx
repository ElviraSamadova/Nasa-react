import {Route,Routes} from "react-router-dom";
import React from 'react';
import Home from "../pages/home/Home";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signUp/SignUp";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFoundPage from "../pages/error-page/Error";


const RouterN = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default RouterN;
