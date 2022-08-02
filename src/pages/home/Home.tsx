
import "./Home.scss"
import React, { useState, useEffect } from "react"
import HttpClient from "../../HttpClient.tsx"
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [apod, setApod] = useState({})
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  const { t, i18n } = useTranslation();

  return (
    <div> 
           {/* <div className="d-flex justify-content-between align-items-center">
           <div className="left">
        <h4> {t("title")}</h4>
        <p className=" mt-2 text-center">{apod.title} - <i>{apod.date}</i></p>
      </div>
      <div className="right">
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
      </div>
           </div> */}

      <div className="info">
      <h3> {t("title")}</h3>
        <h5 className=" mt-2">{apod.title} - <i>{apod.date}</i></h5>
      </div>

      {apod && (
        <div>
         <div className="nasa-img">  <img  style={{objectFit: "cover", marginTop: "20px"}} src={apod.url} alt="APOD" width="100%" height="350px" /></div>
          <p className="nasa-desc">{apod.explanation}</p>
        </div>
      )}

       
      
    </div>

  )
        }


export default Home
