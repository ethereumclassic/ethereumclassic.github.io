import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return <div>{t("hello")}</div>;
};

export default Welcome;
