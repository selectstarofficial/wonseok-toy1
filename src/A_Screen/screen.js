import React from "react";
import "./screen.css";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
const Screen = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="Screen" className="Screen_cover">
      <div className="Screen_main_page">
        <p className="title">
          THE FINEST
          <br />
          AI Data Platform
        </p>
        <p className="sub">{t("welcome")}</p>
        <HashLink smooth to="/Contact">
          <div className="Screen_button">GET STARTED</div>
        </HashLink>
      </div>
    </div>
  );
};

export default Screen;
