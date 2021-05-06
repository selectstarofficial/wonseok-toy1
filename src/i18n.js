import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      welcome: "Diverse and High Quality Data fitted just for your projects",
      button: "GET STARTED",
    },
  },
  ko: {
    translation: {
      welcome:
        "당신의 프로젝트에 딱 맞는 다양한 고품질 데이터를 빠르고 정확하게!",
      button: "지금 시작하기",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});
export default i18n;
