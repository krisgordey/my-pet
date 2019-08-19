import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementRuLocale from "element-ui/lib/locale/lang/ru-RU";
import enLocale from "../translations/en.json";
import ruLocale from "../translations/ru.json";

Vue.use(VueI18n);

export const locales = [
  {
    code: "en",
    label: "EN",
    name: "English",
    dir: "ltr"
  },
  {
    code: "ru",
    label: "RU",
    name: "Русский",
    dir: "ltr"
  }
];

const messages = {
  ru: {
    ...ruLocale,
    ...elementRuLocale
  },
  en: {
    ...enLocale,
    ...elementEnLocale
  }
};

const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "ru", // set fallback locale
  messages // set locale messages
});

export default i18n;
