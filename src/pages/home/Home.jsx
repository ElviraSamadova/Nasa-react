
import "./Home.scss"
import React, { useState, useEffect } from "react"
import HttpClient from "../../HttpClient"
import { useTranslation } from "react-i18next";

const Home = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  const { t, i18n } = useTranslation();

  return (
    <div>
      <h3 className="text-center pb-4"> {t("title")}</h3>
      {apod && (
        <div>
          <img src={apod.url} alt="APOD" width="100%" height="auto" />
          <p>{apod.explanation}</p>
        </div>
      )}
    </div>

  )
        }


export default Home
