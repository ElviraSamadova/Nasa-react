import {Route,Routes} from "react-router-dom";
import React from 'react'
import Home from "../pages/home/Home";
import Login from "../pages/login-page/Login";
import SignUp from "../pages/signUp/SignUp";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";


const RouterN = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>git commit -m first
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default RouterN
