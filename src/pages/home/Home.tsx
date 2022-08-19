import "./Home.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home page">
      <div className="home-content">
        <h1> {t("title")}</h1>
        <h5>{t("home.info")}</h5>
        <Link to="/apod" className="explore-btn">
          {t("home.btn")} <span className="rocket">🚀</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
