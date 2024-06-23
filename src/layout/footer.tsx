import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <Flex
      component="footer"
      direction="column"
      styles={{
        root: {
          background: "footerBg", // TODO: Mantine - Fix, background color not working
        },
      }}
      className={classes.footer}
    >
      <div className={classes.links}>
        <Link to="/">{t("footer.frontPageLink")}</Link>
        <a href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024">
          Ylen vaalikone presidentivaaleissa 2024
        </a>
        {/* TODO: Link to source code */}
      </div>
      {/* TODO: Language menu */}
    </Flex>
  );
};
