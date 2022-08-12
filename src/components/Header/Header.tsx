import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <div id="header">
      <div className="header-wrapper container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
              width="150px"
              alt="nasa-logo"
            />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="/about">{t("menu.part1")}</Link>
          </li>
          <li>
            <Link className="btnl" to="/calendar">
              {t("menu.part2")}
            </Link>
          </li>
          <li>
            <Link to="/contact">{t("menu.part3")}</Link>
          </li>
          <li>
            <Link className="btnl" to="/login">
              {t("menu.part4")}
            </Link>
          </li>
          <li>
            <Link className="btnl" to="/signup">
              {t("menu.part5")}
            </Link>
          </li>
        </ul>
        <div className="lang">
          <button className="lang-btn" onClick={() => changeLanguage("en")}>
            🇺🇸
          </button>
          <button className="lang-btn" onClick={() => changeLanguage("ru")}>
            🇷🇺
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
