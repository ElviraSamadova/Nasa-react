import Header from "./components/Header/Header.jsx";
import React, { useState, useEffect } from "react";
import HttpClient from "./HttpClient.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import RouterN from "./routes/RouterN.tsx";


function App() {
  const [apod, setApod] = useState({})


  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])


  return (

    <div className="App container">

      <Router>
          <Header/>
           <RouterN/>
           <Footer/>
      </Router>
     
    </div>
  );
  }


export default App;






 
   