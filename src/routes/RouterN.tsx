import {Route,Routes} from "react-router-dom";
import React from 'react'
import Home from "../pages/home/Home.tsx";
import Login from "../pages/login-page/Login.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";
import About from "../pages/about/About.tsx";
import Contact from "../pages/contact/Contact.tsx";
import Error from "../pages/error/Error.tsx";


const RouterN = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default RouterN;
