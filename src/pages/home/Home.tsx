import "./Home.scss";
import React, { useState, useEffect } from "react";
import HttpClient from "../../HttpClient";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [apod, setApod] = useState(Object)
  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  const { t } = useTranslation();

  return (
    <div> 

      <div className="info">
      <h3> {t("title")}</h3>
        <h5 className=" mt-2">{apod.title}  - <i>{apod.date}</i></h5>
      </div>

      {apod && (
        <div>
         <div className="nasa-img">  <img  style={{objectFit: "cover", marginTop: "20px"}} src={apod.url} alt="APOD" width="100%" height="400px" /></div>
          <p className="nasa-desc">{apod.explanation}</p>
        </div>
      )}

       
      
    </div>

  )
        }


export default Home
