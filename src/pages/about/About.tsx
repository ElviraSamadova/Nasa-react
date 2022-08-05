import React from 'react';
import './About.scss';
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <div>
       <div className="about-box">
        <h5>{t("about.title")}</h5>
        <p>{t("about.desc") }</p>
       </div>
       <div className="images">
        <div className="container  d-flex">
        <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU" alt="about-nasa" />
       </div>
       <div className=" col-3 box">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QNhwMcyofhw983C3_jTun-jpBpTA67-ZWw&usqp=CAU" alt="the future is now" />
       </div>

       <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GttlpQLUE6gj64d9KneS2GXNB6h44rIbTj3mJFNpLvzaL_DdGGXXHni5r9BL_bl7xyU&usqp=CAU" alt="" />
       </div>

       <div className="col-3 box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU" alt="about-nasa" />
       </div>
        </div>
      
       
       </div>
    </div>
  );
};

export default About;
