import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Flex, useMantineTheme } from "@mantine/core";
import { Route } from "src/routes";

export const Toolbar = () => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  /* TODO: Options need to collapse at breakpoint 768px */
  /*
  TODO: Mantine - Link styles
  .toolbar__nav a {
    text-decoration: none;
  }
  */
  return (
    <Flex
      component="header"
      align="center"
      bg="primaryBg"
      px="1.5rem"
      // h="var(--toolbar-height)"
      h={theme.other.toolbarHeight}
      style={{
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 15%) 0 0 7px 0", // TODO: Mantine - define via theme
      }}
    >
      <Flex
        component="nav"
        maw="1080px"
        align="center"
        justify="center"
        fw="700"
      >
        <Flex gap="1.5rem" align="center">
          <Box
            h="2.5rem"
            w="2.5rem"
            bg="yleLogo"
            style={{ borderRadius: "2px" }}
          ></Box>
          <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
