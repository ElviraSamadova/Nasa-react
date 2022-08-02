import React from 'react'
import "./Footer.scss"
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id='footer'>
       <h6>{t("footer")} &copy;</h6>
    </div>
  )
}

export default Footer
