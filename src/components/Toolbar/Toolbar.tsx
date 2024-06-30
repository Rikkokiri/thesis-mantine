import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Flex, useMantineTheme } from "@mantine/core";
import { Route } from "src/routes";
import classes from "./Toolbar.module.css";

export const Toolbar = () => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  return (
    <Flex
      className={classes.toolbar}
      component="header"
      align="center"
      justify="center"
      px="1.5rem"
      h={theme.other.toolbarHeight} // Token from theme can be used to style components
    >
      <Flex component="nav" className={classes.nav} align="center" justify="flex-start" fw="700">
        <Flex gap="1.5rem" align="center">
          <Box h="2.5rem" w="2.5rem" bg="var(--yle-logo)" style={{ borderRadius: "2px" }}></Box>
          <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
