import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <Flex component="footer" direction="column" className={classes.footer}>
      <div className={classes.links}>
        <Link to="/">{t("footer.frontPageLink")}</Link>
        <a
          href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024"
          target="_blank"
          rel="noreferrer"
        >
          Ylen vaalikone presidentivaaleissa 2024
        </a>
        {/* TODO: Link to source code */}
      </div>
      {/* TODO: Language menu */}
    </Flex>
  );
};
