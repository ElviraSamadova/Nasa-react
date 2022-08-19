import React from "react";
import "./About.scss";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container about page">
      <div className="about-box">
        <h3>{t("about.title")}</h3>
        <p>{t("about.desc")}</p>
      </div>

      <Grid className="gallery" container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU"
              alt="about-nasa"
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QNhwMcyofhw983C3_jTun-jpBpTA67-ZWw&usqp=CAU"
              alt="about-nasa"
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GttlpQLUE6gj64d9KneS2GXNB6h44rIbTj3mJFNpLvzaL_DdGGXXHni5r9BL_bl7xyU&usqp=CAU"
              alt="about-nasa"
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4Q0wT5WN2Nv6E7Gu-visWrkb-bWbo41UYnvO7x5LYYi88Inn5vOacxwKLMVLyJ4qoQ&usqp=CAU"
              alt="about-nasa"
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
